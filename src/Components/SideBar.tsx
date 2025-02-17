import { Brain } from "../Icons/Brain";
import { Twitter } from "../Icons/Twitter";
import { Youtube } from "../Icons/Youtube";
import { SideBarItem } from "./SideBarItem";

export function SideBar() {
    return <>
        <div className="h-screen bg-white dark:bg-slate-800 border-r border-gray-300 dark:border-gray-600 w-72 fixed left-0 top-0 p-4 dark:text-gray-100">
            <div className="flex text-2xl font-bold items-center gap-2 ">
                <Brain size="2xl" />
                Second Brain
            </div>
            <div className="p-4">
                <SideBarItem text="Tweets" icon={<Twitter size="lg" />} />
                <SideBarItem text="Videos" icon={<Youtube size="lg" />} />
            </div>

        </div>
    </>
}