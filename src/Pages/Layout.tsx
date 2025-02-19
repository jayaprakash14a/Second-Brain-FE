
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"

export const Layout = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        if(!window.location.pathname.includes("share")){
            if(localStorage.getItem("braintoken")){
                navigate("/dashboard");
            }else{
                navigate("/signin");
            }
        }
        
    },[])

    return <div className="dark">
        <div className="bg-white dark:bg-gray-950 flex flex-col min-h-screen ">
            <Outlet />
        </div>
    </div>
}