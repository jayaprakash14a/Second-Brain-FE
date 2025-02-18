// import { ReactElement } from "react"

import { ShareIcon } from "../Icons/ShareIcon";
import { TrashIcon } from "../Icons/TrashIcon";
import { Twitter } from "../Icons/Twitter";
import { Youtube } from "../Icons/Youtube";
import { ContentType } from "../interface";

// type content = "twitter" | "youtube" | "text";

interface CardProps {
    title: string,
    link: string,
    type: ContentType,
    shared: boolean,
    onDelete:(contentId:string)=>void,
    _id: string
}



export const Card = (props: CardProps) => {

    const CardIcon = () => {
        return <>
            {
                props.type === "youtube" ? <Youtube size="lg" /> :
                    props.type === "twitter" ? <Twitter size="lg" /> :
                        <ShareIcon size="md" />
            }
        </>
    }

    return <>
        <div className="p-4 bg-white dark:bg-gray-950 rounded-lg border border-gray-300 dark:border-gray-600 h-full min-w-64 max-w-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-lg font-bold dark:text-gray-100">
                    <CardIcon />
                    {props.title}
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-100 gap-2">
                    <a href={props.link} target="_blank" className="cursor-pointer">
                        <ShareIcon size="md" />
                    </a>
                    {!props.shared && <a className="cursor-pointer" onClick={()=>{
                        props.onDelete(props._id) 
                        }}><TrashIcon size="md" /></a> }
                </div>
            </div>
            <div className="pt-4">
                {props.type === "youtube" ?
                    <div className="dark:bg-slate-800 p-4 rounded-lg border border-gray-300 dark:border-red-300 my-2.5">
                        <iframe className="w-full" src={props.link.replace("watch?v=", "embed/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    :
                    <blockquote className="twitter-tweet" data-theme="dark" data-dnt="true">
                        <a href={`https://twitter.com/user/status/${props.link.slice(props.link.lastIndexOf("/") + 1)}`}>Loading tweet....</a>
                    </blockquote>
                }
            </div>
        </div >
    </>
}