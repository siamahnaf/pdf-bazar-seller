"use client"
import { Fragment, useState, useEffect } from "react";
import { FileUpload } from "react-export-table";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { IoCheckmarkSharp } from "react-icons/io5";
import { ReactS3Client } from "react-s3-typescript";
import { PiFilePdfLight } from "react-icons/pi";

//S3 Config
import { s3Config } from "@/Utils/s3.config";

//UI
import Loading from "./Loading";


//Interface
interface Props {
    label?: string;
    sub?: string;
    value: string;
    onChange: (e: string) => void;
    folderName?: string;
    error?: boolean;
    message?: string;
}

const FileUploader = ({ label = "Image", sub = "Add or change image for the item", value, onChange, folderName = "fvr-system", error = false, message = "" }: Props) => {
    //State
    const [progress, setProgress] = useState<number>(-1);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);
    const [infoFile, setFile] = useState<File>();
    const [loading, setLoading] = useState<boolean>(false);

    //Handler
    const onHandleChange = async (file: File) => {
        setFile(file)
        setSuccess(false);
        const s3 = new ReactS3Client({
            ...s3Config,
            dirName: folderName ?? "fvr-system"
        });
        const res = await s3.uploadWithProgress(
            file as File,
            (progress) => {
                setProgress(progress)
            }
        );
        if (!res.key) {
            setErrorMessage("Something went wrong!");
        } else {
            setSuccess(true)
            onChange(res.key);
            setFile(undefined);
        }
    }

    //Handler
    const onDelete = async () => {
        const s3 = new ReactS3Client(s3Config);
        setLoading(true);
        await s3.deleteFile(value).then(() => {
            setLoading(false);
            onChange("");
        }).catch(() => setLoading(false));
    }

    //Lifecycle Hook
    useEffect(() => {
        if (!value) {
            setFile(undefined)
        }
    }, [value])

    return (
        <div className="mb-6">
            <div className="mb-4">
                <label htmlFor="description" className="block text-lg font-semibold text-gray-600">{label}</label>
                <p className="text-[15px] text-gray-500">{sub}</p>
            </div>
            <FileUpload
                acceptType={[".pdf"]}
                size={200}
                onChange={onHandleChange}
                value={infoFile}
            >
                {({
                    dragProps,
                    onFileUpload,
                    isDragging,
                    errors,
                    fileInfo
                }) => (
                    <Fragment>
                        {!fileInfo && !value &&
                            <div className={`border-2 border-dashed w-full rounded-md text-center py-12 hover:border-main cursor-pointer ${isDragging ? "border-main" : "border-gray-300"}`} {...dragProps} onClick={onFileUpload}>
                                <div className={`${isDragging ? "pointer-events-none" : ""}`}>
                                    <PiFilePdfLight className="text-7xl mx-auto text-gray-500" />
                                    <h6 className="text-base font-medium text-gray-600">Drag & drop a PDF, or <br /> <span className="text-main">browse</span></h6>

                                </div>
                            </div>
                        }
                        {fileInfo &&
                            <div className="border border-solid border-gray-200 bg-white h-[200px] flex justify-center items-center p-8 relative group">
                                {progress < 0 &&
                                    <p className="text-gray-500">Checking File Type...</p>
                                }
                                {progress >= 0 &&
                                    <div className="">
                                        <div className="w-[60px] h-[60px] mx-auto">
                                            <CircularProgressbarWithChildren
                                                value={progress * 100}
                                                maxValue={100}
                                                strokeWidth={8}
                                                styles={buildStyles({
                                                    pathColor: "#1dbf73",
                                                    trailColor: "#f7f7f7"
                                                })}
                                            >
                                                <IoCheckmarkSharp className={`text-4xl text-green-600 transition-all duration-300 ${success ? "opacity-100 visible" : "opacity-0 invisible"}`} />
                                            </CircularProgressbarWithChildren>
                                        </div>
                                        <p>Uploading...</p>
                                    </div>
                                }
                            </div>
                        }
                        {!fileInfo && value &&
                            <div className="border border-solid border-gray-200 bg-white h-[200px] flex justify-center items-center p-8 relative group">

                                <div className="">
                                    <div className="w-[60px] h-[60px] mx-auto">
                                        <CircularProgressbarWithChildren
                                            value={100}
                                            maxValue={100}
                                            strokeWidth={8}
                                            styles={buildStyles({
                                                pathColor: "#1dbf73",
                                                trailColor: "#f7f7f7"
                                            })}
                                        >
                                            <IoCheckmarkSharp className={`text-4xl text-green-600 transition-all duration-300 opacity-100 visible`} />
                                        </CircularProgressbarWithChildren>
                                    </div>
                                    <p className="mt-3 overflow-hidden whitespace-nowrap text-ellipsis text-gray-500 font-light text-center w-[250px]">
                                        {value}.pdf
                                    </p>
                                    <div className="mt-2 text-center" onClick={() => onDelete()}>
                                        <button type="button" className=" bg-red-600 text-sm px-2 py-1 text-white rounded relative">
                                            <span className={`${loading && "opacity-20"}`}>Remove</span>
                                            {loading &&
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                                    <Loading size={20} color="stroke-white" />
                                                </div>
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }
                        <p className={`text-sm text-red-600 mt-1 transition-all ${error ? "opacity-100 visible -translate-y-0" : "opacity-0 invisible -translate-y-1"}`}>{message}</p>
                        <p className={`text-sm mt-2 text-red-600 transition-all ${errors ? "opacity-100 visible -translate-y-0" : "opacity-0 invisible -translate-y-1"}`}>{errors}</p>
                        <p className={`text-sm mt-2 text-red-600 transition-all ${errorMessage ? "opacity-100 visible -translate-y-0" : "opacity-0 invisible -translate-y-1"}`}>{errorMessage}</p>
                    </Fragment>
                )}
            </FileUpload>
        </div >
    );
};

export default FileUploader;