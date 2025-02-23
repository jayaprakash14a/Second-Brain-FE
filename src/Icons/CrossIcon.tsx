import { IconSizeVariants } from "."

interface action{
    onClick : ()=> void,
    size : "sm" | "md" | "lg" | "2xl"
}

export function CrossIcon(props: action) {
    return <div onClick={props.onClick} className="cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={IconSizeVariants[props.size]}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    </div>
}