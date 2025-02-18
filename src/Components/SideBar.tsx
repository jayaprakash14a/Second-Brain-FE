import { useNavigate } from "react-router-dom";
import { Brain } from "../Icons/Brain";
import { LogoutIcon } from "../Icons/LogoutIcon";
import { Twitter } from "../Icons/Twitter";
import { Youtube } from "../Icons/Youtube";
import { Profile } from "./Profile";
import { SideBarItem } from "./SideBarItem";

interface SideBarProps {
    username:string;
}

export function SideBar(props : SideBarProps) {

    const navigate = useNavigate();

    function onSignOut(){
        localStorage.removeItem("token");
        navigate("/signin");

    }

    return <>
        <div className="h-screen bg-white dark:bg-slate-800 border-r border-gray-300 dark:border-gray-600 w-72 fixed left-0 top-0 p-4 dark:text-gray-100">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="flex text-2xl font-bold items-center gap-2 ">
                        <Brain size="2xl" />
                        Second Brain
                    </div>
                    <div className="p-4">
                        <SideBarItem text="Tweets" icon={<Twitter size="lg" />} />
                        <SideBarItem text="Videos" icon={<Youtube size="lg" />} />
                    </div>
                </div>
                <div className="flex items-center text-2xl capitalize justify-between border-t border-gray-200 py-4">
                    <div className="flex items-center gap-2"><Profile/>{props.username}</div> 
                    <div onClick={onSignOut} className="cursor-pointer"><LogoutIcon size="2xl" /></div> 
                </div>

            </div>

        </div>
    </>
}