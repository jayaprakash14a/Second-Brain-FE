export interface IconProps{
    size : "sm" | "md" | "lg" | "2xl",
    onclick? : ()=>void,
    loading?: boolean
}

export const IconSizeVariants = {
    "sm":  "size-2",
    "md": "size-4",
    "lg": "size-6",
    "2xl": "size-10"
}