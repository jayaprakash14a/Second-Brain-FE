import { useEffect, useInsertionEffect, useRef } from "react";
import { CrossIcon } from "../Icons/CrossIcon";
import { Button } from "./Button";

interface inputModel {
    onChange: () => void,
    placeholder: string
}

export function CreateContentModal({ open, onClose }) {

    const modalRef = useRef<HTMLDivElement>(null);

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


    return <div>
        {open &&
            <div className="w-screen h-screen bg-slate-700-opaque fixed top-0 left-0 flex justify-center items-center">
                <div className="bg-white p-4 flex flex-col justify-center h-fit rounded-md" ref={modalRef} role="dialog" aria-modal="true">
                    <div className="flex justify-end">
                        <CrossIcon onClick={onClose} aria-label="Close Modal" />
                    </div>
                    <div className="py-2 flex flex-col gap-2">
                        <Input placeholder="Enter title" onChange={() => { }} />
                        <Input placeholder="Provide link" onChange={() => { }} />
                        <Button variant="Primary" text="Submit" size="md" onClick={() => { }} />
                    </div>
                </div>
            </div>
        }
    </div>

}

function Input(props: inputModel) {

    return <input type="text" placeholder={props.placeholder} onChange={props.onChange} className="px-4 py-2 rounded-md border border-gray-300" />
}