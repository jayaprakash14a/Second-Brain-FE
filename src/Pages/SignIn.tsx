import axios from "axios";
import { Button } from "../Components/Button";
import { CustomInput } from "../Components/CustomInput";
import { useRef, useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { LoadingIcon } from "../Icons/LoadingIcon";

export function SignIn() {

    const [loader, setLoader] = useState<boolean>(false)
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        setLoader(true);

        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
                username,
                password
            });
            const jwt = response.data.token;
            localStorage.setItem("braintoken", jwt);
            navigate("/dashboard");
        } catch (e) {
            setLoader(false);
            alert("Invalid credentials");
        }
    }

    return <>
        <div className="h-screen w-screen bg-gray-200 dark:bg-gray-600 flex justify-center items-center">
            <div className="bg-white rounded-lg p-8 min-w-48 flex flex-col gap-4 items-center dark:bg-slate-950 dark:text-gray-200 text-xl">
                Second Brain
                <CustomInput placeholder="Username" ref={usernameRef} />
                <CustomInput placeholder="Password" ref={passwordRef} />
                <Button text="SignIn" variant="Primary" size="md" onClick={signin} fullWidth={true} endIcon={<LoadingIcon loading={loader} size="md" />} />
                <a onClick={() => {
                    navigate("/signup");
                }} className="cursor-pointer text-yellow-700 underline">New user?</a>
            </div>
        </div>
    </>
}