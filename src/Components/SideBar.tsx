import { Brain } from "../Icons/Brain";
import { Twitter } from "../Icons/Twitter";
import { Youtube } from "../Icons/Youtube";
import { SideBarItem } from "./SideBarItem";

export function SideBar(){
    return <>
        <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 p-4">
            <div className="flex text-2xl font-bold items-center gap-2">
            <Brain size="2xl"/>
            Second Brain
            </div>
            <div className="p-4">
                <SideBarItem text="Twitter" icon={<Twitter size="lg"/>} />
                <SideBarItem text="Youtube" icon={<Youtube size="lg"/>}/>
            </div>
            
        </div>
    </>
}