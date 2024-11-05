"use client"
import { ChangeEvent, useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import toast from "react-hot-toast";
//UI
import { Input, TagInput, ImageUploader, FileUploader, Select, Checkbox } from "../UI";

//Components
import Categories from "./Common/Categories";
import Writers from "./Common/Writers";
import Publishers from "./Common/Publisher";
import Teacher from "./Common/Teacher";
import Institution from "./Common/Institution";
import Paper from "./Common/Paper";
import Flash from "./Common/Flash";
import Description from "./Common/Description";
import Specification from "./Common/Specification";

//Input Types
import { ProductInput } from "@/Utils/input.types";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_PRODUCT, GET_PRODUCT, PRODUCT_LIST } from "@/Apollo/query/product/product";

//Interface
interface Props {
    slug: string;
}

const Edit = ({ slug }: Props) => {
    //State
    const [description, setDescription] = useState<string>("");

    //Apollo
    const { data } = useQuery(GET_PRODUCT, { variables: { slug } })
    const [mutate, { loading }] = useMutation(UPDATE_PRODUCT, {
        onCompleted: (data) => {
            toast.success(data.updateProduct.message);
            reset();
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: [{ query: PRODUCT_LIST, variables: { searchDto: defaultSearch } }, "getOwnProduct"],
        awaitRefetchQueries: true
    });

    //Form Initialize
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset
    } = useForm<ProductInput>({
        defaultValues: {
            name: data?.getOwnProduct.name,
            en_name: data?.getOwnProduct.en_name,
            category: data?.getOwnProduct.category?.id?.toString(),
            writer: data?.getOwnProduct.writer?.id?.toString() || "",
            publisher: data?.getOwnProduct.publisher?.id?.toString() ?? "",
            teacher: data?.getOwnProduct.teacher?.id?.toString() ?? "",
            institution: data?.getOwnProduct.institution?.id?.toString() ?? "",
            paper: data?.getOwnProduct.paper?.id?.toString() ?? "",
            keywords: data?.getOwnProduct.keywords ?? [],
            image: data?.getOwnProduct.image,
            file: data?.getOwnProduct.file ?? "",
            pages: data?.getOwnProduct.pages?.toString() ?? "",
            edition: data?.getOwnProduct.edition ?? "",
            isbn: data?.getOwnProduct.isbn ?? "",
            flash: data?.getOwnProduct.flash?.id?.toString() ?? "",
            price: data?.getOwnProduct.price?.toString() ?? "",
            discount: data?.getOwnProduct.discount?.toString() ?? "",
            discount_unit: data?.getOwnProduct.discount_unit ?? "",
            description: data?.getOwnProduct.description ?? "",
            specification: data?.getOwnProduct.specification?.map(a => ({ key: a.key || "", value: a.value || "" })) || [],
            visibility: data?.getOwnProduct.visibility ?? true,
        }
    });



    //Submit
    const onSubmit: SubmitHandler<ProductInput> = (value) => {
        const formData = {
            ...value,
            category: value.category,
            writer: value.writer ?? "",
            publisher: value.publisher ?? "",
            teacher: value.teacher ?? "",
            institution: value.institution ?? "",
            paper: value.paper ?? "",
            pages: value.pages ? Number(value.pages) : 0,
            flash: value.flash ?? "",
            price: Number(value.price),
            discount: value.discount ? Number(value.discount) : 0,
            discount_unit: value.discount_unit ?? "flat",
        }
        mutate({ variables: { productDto: formData, updateProductId: data?.getOwnProduct.id || 0 } });
    }

    //Lifecycle Hook
    useEffect(() => {
        reset({
            name: data?.getOwnProduct.name,
            en_name: data?.getOwnProduct.en_name,
            category: data?.getOwnProduct.category?.id?.toString(),
            writer: data?.getOwnProduct.writer?.id?.toString() || "",
            publisher: data?.getOwnProduct.publisher?.id?.toString() ?? "",
            teacher: data?.getOwnProduct.teacher?.id?.toString() ?? "",
            institution: data?.getOwnProduct.institution?.id?.toString() ?? "",
            paper: data?.getOwnProduct.paper?.id?.toString() ?? "",
            keywords: data?.getOwnProduct.keywords ?? [],
            image: data?.getOwnProduct.image,
            file: data?.getOwnProduct.file ?? "",
            pages: data?.getOwnProduct.pages?.toString() ?? "",
            edition: data?.getOwnProduct.edition ?? "",
            isbn: data?.getOwnProduct.isbn ?? "",
            flash: data?.getOwnProduct.flash?.id?.toString() ?? "",
            price: data?.getOwnProduct.price?.toString() ?? "",
            discount: data?.getOwnProduct.discount?.toString() ?? "",
            discount_unit: data?.getOwnProduct.discount_unit ?? "",
            description: data?.getOwnProduct.description ?? "",
            specification: data?.getOwnProduct.specification?.map(a => ({ key: a.key || "", value: a.value || "" })) || [],
            visibility: data?.getOwnProduct.visibility ?? true,
        })
        setDescription(data?.getOwnProduct.description ?? "");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <div>
            <h4 className="text-2xl font-semibold text-gray-600">Update product</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-3 gap-8 mt-6">
                    <div className="col-span-2">
                        <Input
                            label="Name"
                            id="name"
                            placeholder="Name"
                            {...register("name", { required: "Book Name is required" })}
                            error={errors.name ? true : false}
                            message={errors.name?.message}
                        />
                        <Input
                            label="Name (English)"
                            id="englishName"
                            placeholder="Name"
                            {...register("en_name", {
                                required: "Name is required",
                                pattern: {
                                    value: /^[A-Za-z0-9\s]+$/,
                                    message: "Name must contain only English letters"
                                }
                            })}
                            error={errors.en_name ? true : false}
                            message={errors.en_name?.message}
                        />
                        <Controller
                            control={control}
                            name="category"
                            rules={{ required: "Category is required" }}
                            render={({ field: { value, onChange } }) => (
                                <Categories
                                    value={value}
                                    onChange={onChange}
                                    error={errors.category ? true : false}
                                    message={errors.category?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="writer"
                            render={({ field: { value, onChange } }) => (
                                <Writers
                                    value={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="publisher"
                            render={({ field: { value, onChange } }) => (
                                <Publishers
                                    value={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="teacher"
                            render={({ field: { value, onChange } }) => (
                                <Teacher
                                    value={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="institution"
                            render={({ field: { value, onChange } }) => (
                                <Institution
                                    value={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="paper"
                            render={({ field: { value, onChange } }) => (
                                <Paper
                                    value={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="flash"
                            render={({ field: { value, onChange } }) => (
                                <Flash
                                    value={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="keywords"
                            render={({ field: { onChange, value } }) => (
                                <TagInput
                                    value={value}
                                    onChange={onChange}
                                    placeholder="Add your keyword"
                                    label="Keyword/tags"
                                    id="keyword/tags"
                                />
                            )}
                        />
                        <Input
                            label="Page numbers"
                            id="pageNumbers"
                            placeholder="Total page"
                            {...register("pages")}
                            onInput={(e: ChangeEvent<HTMLInputElement>) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, '')
                            }}
                        />
                        <Input
                            label="Edition"
                            id="editions"
                            placeholder="Edition"
                            {...register("edition")}
                        />
                        <Input
                            label="ISBN"
                            id="isbn"
                            placeholder="ISBN"
                            {...register("isbn")}
                        />
                        <h4 className="text-base font-semibold text-gray-600 my-8">Product Specification</h4>
                        <Specification
                            register={register}
                            errors={errors}
                            control={control}
                        />
                        <h4 className="text-base font-semibold text-gray-600 my-8">Product Description</h4>
                        <Controller
                            control={control}
                            name="description"
                            render={({ field: { onChange } }) => (
                                <Description
                                    onChange={onChange}
                                    value={description}
                                />
                            )}
                        />
                    </div>
                    <div className="col-span-1">
                        <Controller
                            control={control}
                            name="image"
                            rules={{ required: "Product image is required" }}
                            render={({ field: { onChange, value } }) => (
                                <ImageUploader
                                    label="Product Image"
                                    sub="Add or change image for the product"
                                    width={928}
                                    height={1432}
                                    onChange={onChange}
                                    value={value}
                                    folderName="product"
                                    previewClass="w-[50%]"
                                    error={errors.image ? true : false}
                                    message={errors.image?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="file"
                            rules={{ required: "PDF file is required" }}
                            render={({ field: { onChange, value } }) => (
                                <FileUploader
                                    label="PDF File"
                                    sub="Add or change pdf file for the product"
                                    onChange={onChange}
                                    value={value}
                                    folderName="product"
                                    error={errors.file ? true : false}
                                    message={errors.file?.message}
                                />
                            )}
                        />
                        <Input
                            label="Price"
                            id="price"
                            placeholder="Price"
                            {...register("price", { required: "Price is required" })}
                            onInput={(e: ChangeEvent<HTMLInputElement>) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, '')
                            }}
                            error={errors.price ? true : false}
                            message={errors.price?.message}
                        />
                        <Input
                            label="Discount"
                            id="discount"
                            placeholder="Discount"
                            {...register("discount")}
                            onInput={(e: ChangeEvent<HTMLInputElement>) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, '')
                            }}
                        />
                        <Controller
                            control={control}
                            name="discount_unit"
                            render={({ field: { value, onChange } }) => (
                                <Select
                                    label="Discount Unit"
                                    value={value}
                                    onChange={onChange}
                                    id="discountUnit"
                                    placeholder="Discount Unit"
                                    options={[
                                        { value: "flat", label: "Flat" },
                                        { value: "percentage", label: "Percentage" }
                                    ]}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="visibility"
                            render={({ field: { onChange, value } }) => (
                                <Checkbox
                                    value={value}
                                    onChange={onChange}
                                    label="Product Visibility"
                                    id="productVisibility"
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="mt-8">
                    <button type="submit" className="py-2.5 px-5 rounded-md text-sm font-semibold bg-main text-white relative" disabled={loading}>
                        <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Save Product</span>
                        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                            {loading &&
                                <div className="w-4 h-4 border-b-2 border-white rounded-full animate-spin ml-auto"></div>
                            }
                        </div>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Edit;