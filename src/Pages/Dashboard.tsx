import { useEffect, useState } from "react";
import { Button } from "../Components/Button";
import { CreateContentModal } from "../Components/CreateContentModal";
import { PlusIcon } from "../Icons/PlusIcon";
import { useContent } from "../Hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { BrainContent } from "../Components/BrainContent";
import { useNavigate } from "react-router-dom";
import { CopyIcon } from "../Icons/Copy";
import { PageHeader } from "../Components/PageHeader";

export function Dashboard() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const { username, contents, refresh, fetchDone } = useContent();
    const [menuOpen, SetMenuOpen] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("braintoken")) {
            navigate("/signin");
        }
    }, [])

    function onClose() {
        setModalOpen(false);
    }

    useEffect(() => {
        refresh();
    }, [modalOpen])

    function onAddContent() {
        setModalOpen(true);
    }

    function onMenuToggle(){
        SetMenuOpen((val)=> !val);
    }

    const onDeleteContent = async (contentId: string) => {

        await axios.delete(`${BACKEND_URL}/api/v1/content/${contentId}`, {
            headers: {
                "Authorization": localStorage.getItem("braintoken")
            }
        });
        refresh();
    }

    async function onShareBrain() {

        const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`,
            {
                share: true
            },
            {
                headers: {
                    "Authorization": localStorage.getItem("braintoken")
                }
            }
        );

        const hash = response.data.hash;
        const baseURL = `${window.location.protocol}//${window.location.host}`;
        const shareURL = `${baseURL}/share/${hash}`;

        await navigator.clipboard.writeText(shareURL);
        alert(`Shareable link copied to clipboard.`);
    }

    const ScreenMsg = () => {
        return <>
            {fetchDone ? !(contents.length > 0) && <div className="w-full flex justify-center h-full items-center">Hey buddy!! Please load some into brain.......</div>
                :
                <div className="w-full flex justify-center h-full items-center">Hey buddy!! Please wait until we load.......</div>
            }
        </>
    }

    return (
        <>
            <div className="flex">
                {/* <SideBar username={username} /> */}
                <div className="p-4 flex flex-col gap-4 min-h-screen bg-gray-200 dark:bg-gray-950 w-full ">
                    <PageHeader username={username} menuOpen={menuOpen} onMenuToggle={onMenuToggle} />
                    <CreateContentModal open={modalOpen} onClose={onClose} />
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full dark:bg-slate-800 px-4 md:px-8 py-4 rounded-md gap-4">
                        <div className="flex justify-center dark:text-gray-100 text-2xl font-bold px-4 w-full md:w-fit">
                            All Notes
                        </div>
                        <div className="justify-end gap-4 hidden md:flex">
                            <Button variant="Primary" size='sm' onClick={onAddContent} text='Add content' startIcon={<PlusIcon size='lg' />} />
                            <Button variant="Secondary" size='md' onClick={onShareBrain} text='Share Brain' startIcon={<CopyIcon size='lg' />} />
                        </div>
                    </div>
                    <div className=" flex justify-center gap-8 md:hidden">
                            <Button variant="Primary" size='sm' onClick={onAddContent} text='Add content' startIcon={<PlusIcon size='lg' />} />
                            <Button variant="Secondary" size='md' onClick={onShareBrain} text='Share Brain' startIcon={<CopyIcon size='lg' />} />
                        </div>
                    <div className="dark:text-gray-100 w-full dark:bg-slate-800 px-8 py-4 rounded-md min-h-48">
                        <ScreenMsg />
                        <BrainContent contents={contents} shared={false} onDelete={onDeleteContent} />
                    </div>
                </div>
            </div>



        </>
    )
}