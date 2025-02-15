// import { ReactElement } from "react"

import { ReactElement } from "react"
import { ShareIcon } from "../Icons/ShareIcon";

type content = "Twitter" | "Youtube" | "Text";

interface CardProps {
    title: string,
    icon: ReactElement,
    link: string,
    type: content,

}

export const Card = (props: CardProps) => {

    return <>
        <div className="p-4 bg-white rounded-md border border-gray-300 max-w-96 h-full">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 font-sm">
                    <ShareIcon size="md" />
                    {props.title}
                </div>
                <div className="flex items-center text-gray-500 gap-2">
                    <a href={props.link} target="_blank">
                        <ShareIcon size="md" />
                    </a>
                    <ShareIcon size="md" />
                </div>
            </div>
            <div className="pt-4">
                {props.type === "Youtube" ?
                    <iframe className="w-full" src={props.link.replace("watch","embed")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    :
                    <blockquote className="twitter-tweet">
                        <a href={props.link.replace("x.com", "twitter.com")}></a>
                    </blockquote>
                }
            </div>
        </div >
    </>
}