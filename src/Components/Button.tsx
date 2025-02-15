type Variants = "Primary" | "Secondary";

export interface ButtonProps{
    variant: Variants,
    size: "sm" | "md" | "lg",
    text: string,
    startIcon?: any,
    endIcon?: any,
    onClick: ()=>void,

}

const defaultStyles = "rounded flex";

const sizeStyle = {
    "sm" : "py-1 px-2",
    "md" : "py-2 px-4",
    "lg" : "py-4 px-6" 
}
const variantStyles = {
    "Primary": "bg-purple-600 text-white rounded",
    "Secondary": "bg-purple-300 text-purple-600"
}


export const Button = (props: ButtonProps)=>{
    
    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyle[props.size]} `}>{props.startIcon ? <div className="pr-2"> {props.startIcon} </div>: <div></div>}
    {props.text}{props.endIcon ? <div className="pl-2">{props.endIcon}</div>: <div></div>}
    </button>
}
