import { useRef } from "react";
import { Button } from "../Components/Button";
import { CustomInput } from "../Components/CustomInput";
import axios from "axios";
import { BACKEND_URL } from '../config'
import { useNavigate } from "react-router-dom";

export function SignUp(){

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
                username,
                password
        })
        localStorage.setItem("braintoken", response.data.token);
        navigate("/dashboard");
    }

    return <>
        <div className="h-screen w-screen bg-gray-200 dark:bg-gray-600 flex justify-center items-center">
            <div className="bg-white rounded-lg p-8 min-w-48 flex flex-col gap-4 items-center dark:bg-slate-950 dark:text-gray-200 text-xl">
                Second Brain
                <CustomInput placeholder="Username" ref={usernameRef} />
                <CustomInput placeholder="Password" ref={passwordRef}/>
                <Button text="SignUp"  variant="Primary" size="md" onClick={signup} fullWidth={true} loading={true}/>
                <a onClick={() => {
                    navigate("/signin");
                }} className="cursor-pointer text-yellow-700 underline">Existing user?</a>
            </div>
        </div>
    </>
}