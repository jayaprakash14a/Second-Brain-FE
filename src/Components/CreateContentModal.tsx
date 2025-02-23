import { useEffect, useRef, useState } from "react";
import { CrossIcon } from "../Icons/CrossIcon";
import { Button } from "./Button";
import { CustomInput } from "./CustomInput";
import { Youtube } from "../Icons/Youtube";
import { Twitter } from "../Icons/Twitter";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { ContentModal, ContentType } from "../interface";
import { LoadingIcon } from "../Icons/LoadingIcon";


export function CreateContentModal(props: ContentModal) {

    const modalRef = useRef<HTMLDivElement>(null);
    const [loader, setLoader] = useState<boolean>(false)
    const titleRef = useRef<HTMLInputElement | null>(null);
    const linkRef = useRef<HTMLInputElement | null>(null);
    const [type, setType] = useState(ContentType.Youtube);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {

            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                props.onClose();
            }
        }
        if (props.open)
            document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [open, onclose])

    async function addContent() {

        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        setLoader(true);

        try {
            await axios.post(`${BACKEND_URL}/api/v1/content`, {
                link,
                type,
                title
            }, {
                headers: {
                    "Authorization": localStorage.getItem("braintoken")
                }
            })
        }
        catch (e) {
            setLoader(false);
            alert("Adding content failed");
        }

        alert("Content added");
        props.onClose();
    }


    return <>
        {props.open &&
            <div className="w-screen h-screen bg-slate-700-opaque dark:bg-slate-800-opaque fixed top-0 left-0 flex justify-center items-center z-2" onClick={props.onClose}>
                <div className="py-4 px-8 w-10/12 md:w-6/12 lg:w-5/12 flex flex-col justify-center h-fit rounded-md bg-gray-200 dark:bg-slate-950 dark:text-gray-100 gap-4" ref={modalRef} role="dialog" aria-modal="true" onClick={(e)=>{
                    e.stopPropagation();
                }}>
                    <div className="flex justify-end">
                        <CrossIcon onClick={props.onClose} aria-label="Close Modal" size="lg" />
                    </div>
                    <div className="py-2 flex flex-col gap-2">
                        <CustomInput placeholder="Enter title" ref={titleRef} />
                        <CustomInput placeholder="Provide link" ref={linkRef} />
                        <div className="flex flex-col items-center my-4">
                            <div className="flex gap-8">
                                <Button variant={`${(type === ContentType.Youtube) ? "Primary" : "Secondary"}`} text="Youtube" size="md" startIcon={<Youtube size="md" />} onClick={() => {
                                    setType(ContentType.Youtube)
                                }} />
                                <Button variant={`${(type === ContentType.Twitter) ? "Primary" : "Secondary"}`} text="Twitter" size="md" startIcon={<Twitter size="md" />} onClick={() => {
                                    setType(ContentType.Twitter)
                                }} />
                            </div>
                        </div>
                        <Button variant="Primary" text="Submit" size="md" onClick={addContent} endIcon={<LoadingIcon size="md" loading={loader}/>} />
                    </div>
                </div>
            </div>
        }
    </>

}

