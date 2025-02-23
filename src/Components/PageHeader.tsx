import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo"
import { Profile } from "./Profile";
import { LogoutIcon } from "../Icons/LogoutIcon";
import { MenuIcon } from "../Icons/MenuIcon";
import { CrossIcon } from "../Icons/CrossIcon";
import { ProfileIcon } from "../Icons/ProfileIcon";

interface header {
    username: string,
    shared?: boolean,
    menuOpen?: boolean,
    onMenuToggle?: () => void
}

export const PageHeader = (props: header) => {

    const navigate = useNavigate();

    function onSignOut() {
        localStorage.removeItem("token");
        navigate("/signin");

    }

    return <div className="flex justify-between w-full dark:text-gray-100 items-center">
        <Logo />
        {props.shared ? ""
            :
            <>
                {props.menuOpen ?
                    <div className="md:hidden w-screen h-screen bg-slate-700-opaque dark:bg-slate-800-opaque fixed top-0 left-0 flex justify-center  items-center z-2">
                        <div className="absolute right-4 top-6" >
                            <CrossIcon onClick={() => {
                                props.onMenuToggle ? props.onMenuToggle() : null;
                            }} size="lg" />
                        </div>
                        <div className="min-w-52 absolute flex flex-col bg-gray-200 dark:bg-slate-950 right-20 top-14 right-12 p-4 rounded-lg gap-4">
                            <div className="flex items-center gap-4 items-center">
                                <ProfileIcon size="xl" />
                                <p className="truncate" title={props.username}>{props.username}</p>
                            </div>
                            <div onClick={onSignOut} title="Sign Out" className="cursor-pointer flex gap-4 items-center">
                                <LogoutIcon size="xl" />
                                <p className="" >Sign out</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="md:hidden"><MenuIcon size="lg" onclick={props.onMenuToggle} /> </div>
                }
                <div className="hidden md:block">
                    {!props.shared &&
                        <div className="flex items-center text-2xl capitalize justify-between border-l border-gray-200 px-4 gap-8 max-w-sm">
                            <div className="flex items-center gap-2 w-10/12">
                                <Profile />
                                <p className="truncate" title={props.username}>{props.username}</p>
                            </div>
                            <div onClick={onSignOut} title="Sign Out" className="cursor-pointer">
                                <LogoutIcon size="xl" />
                            </div>
                        </div>
                    }
                </div>
            </>
        }

    </div>
}