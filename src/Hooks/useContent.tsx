import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Content } from "../interface";



export function useContent(){
    const [contents , setContents] = useState<Content[]>([]);
    const [username, setUsername] = useState<string>("");
    const [fetchDone, setFetchDone] = useState<boolean>(false)
    
    function refresh(){
        axios.get(`${BACKEND_URL}/api/v1/content`,{
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        }).then((response)=>{
            setContents(response.data.content);
            setUsername(response.data.username);
            setFetchDone(true);
        })
    }
    useEffect(()=>{
        refresh();
    },[])

    return {username, contents, refresh, fetchDone};

}