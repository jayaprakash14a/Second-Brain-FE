
import { Outlet } from "react-router-dom"

export const Layout = () => {

    return <div className="dark">
        <div className="bg-white dark:bg-gray-950 flex flex-col min-h-screen ">
            <Outlet />
        </div>
    </div>
}