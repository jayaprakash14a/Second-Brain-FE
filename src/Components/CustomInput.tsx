interface inputModel {
    onChange?: () => void,
    placeholder: string,
    ref?: React.Ref<HTMLInputElement>
}


export function CustomInput(props: inputModel) {

    return <input type="text" placeholder={props.placeholder} onChange={props.onChange} className="px-4 py-2 rounded-md border border-gray-300" ref={props.ref}/>
}