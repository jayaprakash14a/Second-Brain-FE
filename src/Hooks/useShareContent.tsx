import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import { useParams } from "react-router-dom";
import axios from "axios";

export const useSharedContent = ()=>{
    const [content, setContent] = useState([]);
    const [username, setUsername] = useState("");
    const [fetchDone, setFetchDone] = useState<boolean>(false);

    const {brainid} = useParams();

    useEffect( ()=>{
        axios.get(`${BACKEND_URL}/api/v1/brain/${brainid}`)
        .then((response)=>{
            console.log(response.data);
            setContent(response.data.content);
            setUsername(response.data.username);
            setFetchDone(true);
        })
        
    },[])

    return {username, content, fetchDone};

}