import axios from "axios";
import { Button } from "../Components/Button";
import { CustomInput } from "../Components/CustomInput";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function SignIn(){
    
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signin(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        

        const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
                username,
                password
        })
        
        const jwt= response.data.token;
        localStorage.setItem("token",jwt);

        navigate("/dashboard");
        

    }


    return <>
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-md p-8 min-w-48 flex flex-col gap-4 items-center">
                WELCOME
                <CustomInput placeholder="Username" ref={usernameRef}/>
                <CustomInput placeholder="Password" ref={passwordRef}/>
                <Button text="SignIn"  variant="Primary" size="md" onClick={signin} fullWidth={true} loading={false}/>
            </div>
        </div>
    </>
}