interface inputModel {
    onChange?: () => void,
    placeholder: string,
    ref?: React.Ref<HTMLInputElement>,
    required?: boolean,
    validation?:boolean
}


export function CustomInput(props: inputModel) {

    return <div className="flex flex-col">
        <input type="text" placeholder={props.placeholder} onChange={props.onChange} className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-950" ref={props.ref} />
        {!props.validation && props.required && <div className="text-red-400">*Field is required</div>}
    </div>
    
}