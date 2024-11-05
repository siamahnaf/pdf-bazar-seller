"use client"
import { MdDelete } from "react-icons/md";

//Children
interface Props {
    isFetching?: boolean;
    onConfirm: (id: number | null) => void;
    id: number | null;
    open: boolean;
    onClose: () => void;
}

const ConfirmDialog = ({ isFetching = false, id, onConfirm, open, onClose }: Props) => {
    return (
        <div>
            <div className={`fixed left-0 top-0 w-full h-full bg-black/50 z-30 transition-all duration-200 ${open ? "opacity-100 visible" : "invisible opacity-0"}`} onClick={onClose} />
            <div className={`fixed bg-white transition-all duration-300 z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] shadow-2xl rounded-md px-5 py-7 ${open ? "opacity-100 -translate-y-1/2" : "opacity-0 -translate-y-[calc(50%+10px)]"}`}>
                <MdDelete className="text-7xl mx-auto text-red-600" />
                <p className="mt-2 mb-1.5 font-semibold text-center text-red-600">Delete?</p>
                <p className="font-medium text-center text-[15px] text-gray-500">This action can&apos;t be undone!</p>
                <div className="mt-6 flex gap-5 justify-center">
                    <button color="green" className="h-[32px] w-[80px] flex items-center justify-center text-sm font-medium border border-solid border-main rounded-md text-main" onClick={onClose}><span>Cancel</span></button>
                    <button color="green" className="bg-main h-[32px] w-[80px] flex justify-center items-center rounded-md text-white uppercase font-medium text-sm" onClick={() => onConfirm(id)} disabled={isFetching} type="button">
                        {isFetching ? (
                            <div>
                                <div className="w-4 h-4 border-b-2 border-white rounded-full animate-spin ml-auto"></div>
                            </div>
                        ) : (
                            <span>Delete</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDialog;