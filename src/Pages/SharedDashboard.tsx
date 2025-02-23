
import { BrainContent } from "../Components/BrainContent";
import { PageHeader } from "../Components/PageHeader";
import { useSharedContent } from "../Hooks/useShareContent";


export const SharedDashboard = () => {

    const { username, content, fetchDone } = useSharedContent();

    const ScreenMsg = () => {
        return <>
            {fetchDone ? !(content.length > 0) && <div className="w-full flex justify-center h-full items-center">Hey buddy!! {username}'s brain empty I mean second*</div>
                :
                <div className="w-full flex justify-center h-full items-center">Hey buddy!! Please wait until we load.......</div>
            }
        </>
    }

    return <>
        <div className="flex">
            {/* <SideBar shared={true} /> */}
            <div className="p-4 flex flex-col gap-4 min-h-screen bg-gray-200 dark:bg-gray-950 w-full">
                <PageHeader username={username} shared={true} />
                <div className="text-3xl capitalize font-bold dark:text-gray-100 w-full dark:bg-slate-800 px-8 py-4 rounded-md flex justify-center lg:justify-start">
                    You are looking at {username} second brain
                </div>
                <div className="dark:text-gray-100 w-full dark:bg-slate-800 px-8 py-4 rounded-md min-h-48">
                    <ScreenMsg />
                    <BrainContent contents={content} shared={true} onDelete={() => { }} />
                </div>

            </div>
        </div>


    </>
}