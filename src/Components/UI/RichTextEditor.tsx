"use client"
import { useState, useEffect } from "react";
import OriginalEditor, { BaseKit, Blockquote, Bold, BulletList, Clear, FontFamily, FontSize, Heading, ImageUpload, Indent, Italic, Link, Table, TextAlign, Emoji, History, SearchAndReplace, TextDirection, ColumnActionButton, Strike, Underline, Color, OrderedList, LineHeight, HorizontalRule, Image } from "reactjs-tiptap-editor";
import "reactjs-tiptap-editor/style.css";
import { ReactS3Client } from "react-s3-typescript";

//S3 config
import { s3Config } from "@/Utils/s3.config";

//Interface
interface Props {
    value: string | boolean;
    onChange: (value: string) => void;
}

//Configurations
const extensions = [
    BaseKit.configure({
        placeholder: {
            showOnlyCurrent: true,
        },
        characterCount: {
            limit: 5_000,
        },
    }),
    History,
    SearchAndReplace,
    TextDirection,
    FontFamily.configure({ spacer: true }),
    FontSize,
    Heading,
    Bold.configure({ spacer: true }),
    Italic,
    Underline,
    Strike,
    Emoji,
    Color,
    BulletList,
    OrderedList,
    TextAlign.configure({ types: ["heading", "paragraph"], spacer: true }),
    Indent,
    LineHeight,
    Link.configure({ spacer: true }),
    Image,
    ImageUpload.configure({
        upload: async (files: File) => {
            const s3 = new ReactS3Client({
                ...s3Config,
                dirName: "product"
            });
            const res = await s3.uploadFile(files as File);
            return process.env.NEXT_PUBLIC_IMAGE_URL + res.key;
        }
    }),
    Blockquote.configure({ spacer: true }),
    HorizontalRule,
    ColumnActionButton,
    Table,
    Clear
];

const RichTextEditor = ({ value, onChange }: Props) => {
    //State
    const [editorKey, setEditorKey] = useState<string>();

    //Effect
    useEffect(() => {
        setEditorKey("dynamic" + Date.now());
    }, [value]);

    return (
        <div key={editorKey}>
            <OriginalEditor
                output="html"
                content={typeof value === "boolean" ? "" : value}
                onChangeContent={(value) => onChange(value)}
                extensions={extensions}
                dark={false}
                hideBubble
                contentClass="!border-gray-300"
            />
        </div>
    );
};

export default RichTextEditor;