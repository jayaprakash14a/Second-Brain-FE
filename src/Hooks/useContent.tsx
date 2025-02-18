import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";



export function useContent(){
    const [contents , setContents] = useState([]);
    const [username, setUsername] = useState("");
    
    function refresh(){
        axios.get(`${BACKEND_URL}/api/v1/content`,{
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        }).then((response)=>{
            setContents(response.data.content);
            setUsername(response.data.username);
        })
    }
    useEffect(()=>{
        refresh();
    },[])

    return {username, contents, refresh};

}