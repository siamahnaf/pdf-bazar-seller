"use client"
import { useFieldArray, UseFormRegister, Control, FieldErrors } from "react-hook-form";

//UI
import { Input } from "@/Components/UI";

//Input Types
import { ProductInput } from "@/Utils/input.types";

//Interface
interface Props {
    register: UseFormRegister<ProductInput>;
    errors: FieldErrors<ProductInput>;
    control: Control<ProductInput>;
}

const Specification = ({ control, errors, register }: Props) => {
    //Field Array
    const { fields, append, remove } = useFieldArray({
        control,
        name: "specification",
    });

    return (
        <div className="border border-solid border-gray-300 rounded-md mb-10">
            <div className="p-5">
                <div>
                    <div>
                        {fields.map((_, i) => (
                            <div key={i} className="grid grid-cols-2 gap-x-3 gap-y-1">
                                <div>
                                    <Input
                                        label="Key"
                                        id="key"
                                        placeholder="Key"
                                        {...register?.(`specification.${i}.key`)}
                                    />
                                </div>
                                <div>
                                    <Input
                                        label="Value"
                                        id="value"
                                        placeholder="Value"
                                        {...register?.(`specification.${i}.value`)}
                                    />
                                </div>
                                <div className="col-span-2 text-right">
                                    <button className="text-main text-sm" onClick={() => remove(i)} disabled={fields.length === 1}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => append({ key: "", value: "" })}
                            className="bg-black py-1.5 px-4 rounded-md text-white text-sm font-medium"
                        >
                            Add {fields.length === 0 ? "Specifications" : "More"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specification;