import { ReactElement } from "react";

interface ItemModel {
    icon : ReactElement,
    text : string
}

export function SideBarItem ( props: ItemModel){
    return <div className="flex items-center">
        <div className="p-2">
        {props.icon}
        </div>
        <div className="p-2">
        {props.text}
        </div>
    </div>
}