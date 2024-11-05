"use client"
import { useEffect, useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ReactS3Client } from "react-s3-typescript";

//S3 config
import { s3Config } from "@/Utils/s3.config";

//Interface
interface Props {
    label?: string;
    sub?: string;
    width?: number;
    height?: number;
    onChange: (e: string) => void;
    folderName?: string;
    value?: string | null;
    error?: boolean;
    message?: string;
    previewClass?: string;
    className?: string;
}

const ImageUploader = ({ label = "Image", sub = "Add or change image for the item", width, height, folderName, message = "Required", value, onChange, error = false, previewClass, className }: Props) => {
    //State
    const [image, setImage] = useState<ImageListType>([]);
    const [isPending, setPending] = useState<boolean>(false);
    const [uploadError, setError] = useState<string>("");

    //OnImageChange
    const onImageChange = async (imageList: ImageListType) => {
        setImage(imageList);
        if (imageList.length > 0 && imageList[0].file as File) {
            try {
                setPending(true)
                const s3 = new ReactS3Client({
                    ...s3Config,
                    dirName: folderName ?? "pdf-shop"
                });
                const res = await s3.uploadFile(imageList[0].file as File);
                if (!res.key) {
                    setError("Something went wrong!");
                } else {
                    onChange(res.key)
                }
            } catch (e: any) {
                setError(e.toString())
                setPending(false)
            } finally {
                setPending(false)
            }
        }
    }

    //Handler
    const onImageDelete = async () => {
        setImage([])
        onChange("")
        if (value) {
            const s3 = new ReactS3Client(s3Config);
            await s3.deleteFile(value);
        }
    }
    useEffect(() => {
        if (!value) {
            setImage([])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <div className={className}>
            <div className="mb-4">
                <label htmlFor="description" className="block text-lg font-semibold text-gray-600">{label}</label>
                <p className="text-[15px] text-gray-500">{sub}</p>
            </div>
            <div>
                <ImageUploading
                    value={image}
                    onChange={onImageChange}
                    multiple={false}
                    maxFileSize={5000000}
                    resolutionWidth={width ?? undefined}
                    resolutionHeight={height ?? undefined}
                    resolutionType="ratio"
                    dataURLKey="fvr-url"
                >
                    {({
                        imageList,
                        onImageUpload,
                        isDragging,
                        dragProps,
                        errors
                    }) => (
                        <div>
                            {imageList.length === 0 && !value &&
                                <button
                                    onClick={onImageUpload}
                                    {...dragProps}
                                    className={`border-2 border-dashed w-full rounded-md text-center py-12 hover:border-main ${isDragging ? "border-main" : "border-gray-300"}`}
                                    type="button"
                                >
                                    <div className={`${isDragging ? "pointer-events-none" : ""}`}>
                                        <Image src="/upload.png" width={90} height={90} alt="Upload" className="w-[70px] mx-auto" />
                                        <h6 className="text-base font-medium text-gray-600">Drop your image here, or <span className="text-main">browse</span></h6>
                                        {width && height &&
                                            <p className="text-sm text-gray-400">{width}x{height}</p>
                                        }
                                    </div>
                                </button>
                            }
                            {imageList.length > 0 &&
                                imageList.map((image, i) => (
                                    <div key={i} className={`relative cursor-pointer group rounded-md overflow-hidden ${previewClass}`}>
                                        <Image src={image["fvr-url"]} alt="Image" width={width || 400} height={height || 400} className="w-full object-cover object-top" />
                                        {!isPending &&
                                            <div className="absolute top-0 w-full left-0 h-full bg-black/50 flex justify-center items-center transition-all invisible opacity-0 group-hover:opacity-100 group-hover:visible">
                                                <div className="px-2 text-center">
                                                    <h6 className="text-center text-white line-clamp-1 text-sm">{image.file?.name}</h6>
                                                    <button className="text-white text-lg mt-1" onClick={() => onImageDelete()}>
                                                        <RiDeleteBin6Line />
                                                    </button>
                                                </div>
                                            </div>
                                        }
                                        {isPending &&
                                            <div className="absolute top-0 left-0 bg-black/50 w-full h-full ">
                                                <div className="w-full h-full flex justify-center items-center">
                                                    <div className="w-6 h-6 border-b-2 border-white rounded-full animate-spin"></div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                ))
                            }
                            {value && imageList.length === 0 &&
                                <div className={`relative cursor-pointer group rounded-md overflow-hidden ${previewClass}`}>
                                    <Image src={process.env.NEXT_PUBLIC_IMAGE_URL + value} alt="Image" width={width || 400} height={height || 400} className="w-full object-cover object-top" />
                                    {!isPending &&
                                        <div className="absolute top-0 w-full left-0 h-full bg-black/50 flex justify-center items-center transition-all invisible opacity-0 group-hover:opacity-100 group-hover:visible">
                                            <div className="px-2 text-center">
                                                <h6 className="text-center text-white line-clamp-1 text-sm">{value}</h6>
                                                <button className="text-white text-lg mt-1" onClick={() => onImageDelete()}>
                                                    <RiDeleteBin6Line />
                                                </button>
                                            </div>
                                        </div>
                                    }
                                    {isPending &&
                                        <div className="absolute top-0 left-0 bg-black/50 w-full h-full ">
                                            <div className="w-full h-full flex justify-center items-center">
                                                <div className="w-6 h-6 border-b-2 border-white rounded-full animate-spin"></div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            }
                            <p className={`text-sm text-red-600 mt-1 transition-all ${error ? "opacity-100 visible -translate-y-0" : "opacity-0 invisible -translate-y-1"}`}>{message}</p>
                            <p className={`text-sm text-red-600 mt-1 transition-all ${uploadError ? "opacity-100 visible -translate-y-0" : "opacity-0 invisible -translate-y-1"}`}>a{uploadError}</p>
                            {errors &&
                                <ul className="mt-3 ml-1">
                                    {errors.maxFileSize &&
                                        <li className="flex text-sm text-red-600 font-medium items-center gap-1"><div className="w-[4px] h-[4px] rounded-full bg-gray-700" /> <p>File size exceeds 5MB limit.</p></li>
                                    }
                                    {errors.maxNumber &&
                                        <li className="flex text-sm text-red-600 font-medium items-center gap-1"><div className="w-[4px] h-[4px] rounded-full bg-gray-700" /> <p>Select one image at a time.</p></li>
                                    }
                                    {errors.acceptType &&
                                        <li className="flex text-sm text-red-600 font-medium items-center gap-1"><div className="w-[4px] h-[4px] rounded-full bg-gray-700" /> <p>Only image files are allowed.</p></li>
                                    }
                                    {errors.resolution &&
                                        <li className="flex text-sm text-red-600 font-medium items-center gap-1"><div className="w-[4px] h-[4px] rounded-full bg-gray-700" /> <p>Image must be {width}x{height} pixels.</p></li>
                                    }
                                </ul>
                            }
                        </div>
                    )}
                </ImageUploading>
            </div>
        </div>
    );
};

export default ImageUploader;