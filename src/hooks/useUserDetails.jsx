import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


export default function useUserDetails() {
    const {id} = useParams();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://dummyapi.io/data/v1/user/${id}`, {
            headers: {
                'app-id': import.meta.env.VITE_APP_ID
            }
        }).then(response => {
            setUser({...response.data});
            setIsLoading(false);
        })
    }, []);

    return [user, isLoading];
}