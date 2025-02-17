import { useEffect, useRef, useState } from "react";
import { CrossIcon } from "../Icons/CrossIcon";
import { Button } from "./Button";
import { CustomInput } from "./CustomInput";
import { Youtube } from "../Icons/Youtube";
import { Twitter } from "../Icons/Twitter";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}
export function CreateContentModal({ open, onClose }) {

    const modalRef = useRef<HTMLDivElement>(null);

    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type, setType ] = useState(ContentType.Youtube);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {

            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        }
        if (open)
            document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [open, onclose])

    async function addContent(){

        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        

        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            link,
            type,
            title
        },{
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        })

        alert("Content added");
        onClose();
        

    }


    return <div>
        {open &&
            <div className="w-screen h-screen bg-slate-700-opaque dark:bg-slate-800-opaque fixed top-0 left-0 flex justify-center items-center z-2">
                <div className="py-4 px-8 w-3/12 flex flex-col justify-center h-fit rounded-md bg-gray-200 dark:bg-slate-950 dark:text-gray-100 gap-4" ref={modalRef} role="dialog" aria-modal="true">
                    <div className="flex justify-end">
                        <CrossIcon onClick={onClose} aria-label="Close Modal" />
                    </div>
                    <div className="py-2 flex flex-col gap-2">
                        <CustomInput placeholder="Enter title"  ref={titleRef}/>
                        <CustomInput placeholder="Provide link"  ref={linkRef} />
                        <div className="flex flex-col items-center my-4">
                            <div className="flex gap-8">
                                <Button variant={`${(type === ContentType.Youtube) ? "Primary" : "Secondary"}`} text="Youtube" size="md" startIcon={<Youtube size="md"/>} onClick={()=>{
                                    setType(ContentType.Youtube)
                                }} />
                                <Button variant={`${(type === ContentType.Twitter) ? "Primary" : "Secondary"}`} text="Twitter" size="md" startIcon={<Twitter size="md"/>} onClick={()=>{
                                    setType(ContentType.Twitter)
                                }} />
                            </div>
                        </div>
                        <Button variant="Primary" text="Submit" size="md" onClick={addContent} />
                    </div>
                </div>
            </div>
        }
    </div>

}

