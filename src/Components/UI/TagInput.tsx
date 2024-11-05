"use client"
import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { IoMdClose } from "react-icons/io";

//Hook
import useOutsideClick from "./outside-click";

//Action
import { SuggestTags } from "@/Actions/suggest-tag";

//interface
interface Props {
    value: string[];
    onChange: (e: string[]) => void;
    placeholder?: string;
    id: string;
    label: string;
}

const TagInput = ({ value = [], onChange, placeholder = "Add your tag here", id, label }: Props) => {
    //Initializing Hook
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    //State
    const [suggestions, setSuggestion] = useState<string[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [inputValue, setValue] = useState<string>("");
    const [focus, setFocus] = useState<boolean>(false);

    //Handler
    const onInputChange = async (value: string) => {
        setValue(value)
        setOpen(true)
        const data = await SuggestTags(value)
        setSuggestion(data)
    }

    //Handler
    const onWrapperClick = () => {
        inputRef.current?.focus();
        setOpen(true)
    }

    //Handler
    useOutsideClick(containerRef, () => setOpen(false))

    //Handler
    const onRemove = (i: number) => {
        onChange(value.filter((_, index) => index !== i));
    }

    const handleOnKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
        e.stopPropagation();

        const text = (e.target as HTMLInputElement).value;

        if (
            !text &&
            value.length &&
            e.key === "Backspace"
        ) {
            setValue(`${value.at(-1)}`)
            onChange([...value.slice(0, -1)]);
        }

        const defaultSeparators = ["Enter"]

        if (text && (defaultSeparators).includes(e.key)) {
            e.preventDefault();
            onChange([...value, text]);
            setValue("")
            setSuggestion([])
            setOpen(false)
        }
    };

    //Handler
    const onOptionsSelect = (text: string) => {
        onChange([...value, text]);
        setValue("")
        setSuggestion([]);
    }

    return (
        <div className="relative mb-4" ref={containerRef}>
            <label
                htmlFor={id}
                className="font-semibold text-gray-500 mb-2 block text-[15px]"
            >
                {label}
            </label>
            <div className={`border border-solid cursor-text rounded-md px-2 py-2.5 flex flex-wrap gap-2 ${focus ? `outline-2 outline-main outline border-transparent` : `outline-none border-gray-300`}`} onClick={onWrapperClick}>
                {value.map((item, i) => (
                    <span className="flex gap-1 items-center bg-[#f5f5f5] px-2 py-1 rounded-sm" key={i}>
                        <span className="font-semibold text-gray-500 text-sm uppercase">{item}</span>
                        <button onClick={() => onRemove(i)} type="button">
                            <IoMdClose className="text-lg text-gray-500" />
                        </button>
                    </span>
                ))}
                <input
                    ref={inputRef}
                    placeholder={placeholder}
                    onChange={(e) => onInputChange(e.target.value)}
                    className="focus:outline-none"
                    onKeyDown={handleOnKeyUp}
                    value={inputValue}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
            </div>
            {suggestions.length > 0 && open &&
                <ul className="absolute left-0 top-full bg-white border border-solid border-gray-200 px-2 z-40 max-h-[300px] overflow-auto py-2 w-full mt-1 rounded-md">
                    {suggestions.filter(a => !value.includes(a)).map((item, i) => (
                        <li key={i} className="my-1 py-1 px-3 cursor-pointer select-none hover:bg-gray-100 rounded" onClick={() => onOptionsSelect(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default TagInput;