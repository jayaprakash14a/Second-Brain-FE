import { Button } from "../Components/Button";
import { CustomInput } from "../Components/CustomInput";

export function SignIn(){

    return <>
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-md p-8 min-w-48 flex flex-col gap-4 items-center">
                WELCOME
                <CustomInput placeholder="Username" />
                <CustomInput placeholder="Password" />
                <Button text="SignIn"  variant="Primary" size="md" onClick={()=>{}} fullWidth={true} loading={true}/>
            </div>
        </div>
    </>
}