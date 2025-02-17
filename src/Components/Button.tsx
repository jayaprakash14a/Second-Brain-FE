import { ReactElement } from "react";

type Variants = "Primary" | "Secondary";

export interface ButtonProps {
    variant: Variants,
    size: "sm" | "md" | "lg",
    text: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick: () => void,
    fullWidth?: boolean,
    loading?: boolean
}

const defaultStyles = "rounded flex justify-center items-center cursor-pointer";

const sizeStyle = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-4 px-6"
}
const variantStyles = {
    "Primary": "bg-purple-600 text-white rounded dark:bg-amber-600",
    "Secondary": "bg-purple-200 text-purple-500 dark:text-amber-600 dark:bg-slate-950 dark:border dark:border-amber-600"
}


export const Button = (props: ButtonProps) => {

    return <button
        className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyle[props.size]} ${props.fullWidth ? "w-full": ""} ${props.loading ? "disabled opacity-70": ""}`}
        onClick={props.onClick}
    >{props.startIcon ? <div className="pr-2"> {props.startIcon} </div> : <div></div>}
        {props.text}{props.endIcon ? <div className="pl-2">{props.endIcon}</div> : <div></div>}
    </button>
}
