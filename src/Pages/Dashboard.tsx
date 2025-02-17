import { useEffect, useState } from "react";
import { Button } from "../Components/Button";
import { CreateContentModal } from "../Components/CreateContentModal";
import { SideBar } from "../Components/SideBar";
import { PlusIcon } from "../Icons/PlusIcon";
import { ShareIcon } from "../Icons/ShareIcon";
import { useContent } from "../Hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { BrainContent } from "../Components/BrainContent";

export function Dashboard() {
    const [modalOpen, setModalOpen] = useState(false);
    const { contents, refresh } = useContent();

    function onClose() {
        setModalOpen(false);
    }

    useEffect(() => {
        refresh();
    }, [modalOpen])

    function onAddContent() {
        setModalOpen(true);
    }


    async function onShareBrain() {

        const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`,
            {
                share: true
            },
            {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            }
        );

        const hash = response.data.hash;
        const baseURL = `${window.location.protocol}//${window.location.host}`;
        const shareURL = `${baseURL}/share/${hash}`;

        await navigator.clipboard.writeText(shareURL);
        alert(`Shareable link copied to clipboard.`);

    }



    return (
        <>


            <div className=''>
                <SideBar />
                <div className="p-4 flex flex-col gap-4 ml-72 min-h-screen bg-gray-200 dark:bg-gray-950">
                    <CreateContentModal open={modalOpen} onClose={onClose} />
                    <div className="flex justify-between w-full dark:bg-slate-800 px-8 py-4 rounded-md">
                        <div className="dark:text-gray-100 text-2xl font-bold px-4">
                            All Notes
                        </div>
                        <div className="flex justify-end gap-4">
                            <Button variant="Primary" size='sm' onClick={onAddContent} text='Add content' startIcon={<PlusIcon size='md' />} />
                            <Button variant="Secondary" size='md' onClick={onShareBrain} text='Share Brain' startIcon={<ShareIcon size='md' />} />
                        </div>
                    </div>

                    <div className="dark:text-gray-100 w-full dark:bg-slate-800 px-8 py-4 rounded-md">
                        <BrainContent contents={contents} shared={false} />
                    </div>


                </div>
            </div>



        </>
    )
}