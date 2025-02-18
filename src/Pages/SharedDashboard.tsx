
import { BrainContent } from "../Components/BrainContent";
import { useSharedContent } from "../Hooks/useShareContent";


export const SharedDashboard = () => {

    const { username, content } = useSharedContent();

    return <>
        <div className="p-4 flex flex-col gap-8 ">
            <div className="text-3xl capitalize font-bold dark:text-gray-100 w-full dark:bg-slate-800 px-8 py-4 rounded-md">
                You are looking at {username} brain
            </div>
            <div className="dark:text-gray-100 w-full dark:bg-slate-800 px-8 py-4 rounded-md min-h-48">
            {!(content.length>0) && <div className="w-full flex justify-center h-full ">Master!! please load some into brain.......</div>}
                <BrainContent contents={content} shared={true}/>
            </div>
            
        </div>

    </>
}