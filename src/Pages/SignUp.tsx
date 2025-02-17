import { useRef } from "react";
import { Button } from "../Components/Button";
import { CustomInput } from "../Components/CustomInput";
import axios from "axios";
import { BACKEND_URL } from '../config'

export function SignUp(){

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/signup`, {
                username,
                password
        })
        alert("You have signed up")
        

    }

    return <>
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-md p-8 min-w-48 flex flex-col gap-4 items-center">
                WELCOME
                <CustomInput placeholder="Username" ref={usernameRef} />
                <CustomInput placeholder="Password" ref={passwordRef}/>
                <Button text="SignUp"  variant="Primary" size="md" onClick={signup} fullWidth={true} loading={true}/>
            </div>
        </div>
    </>
}