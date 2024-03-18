import {useEffect, useState} from "react";
import axios from "axios";


export default function usePosts() {
    const [commonPosts, setCommonPosts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyapi.io/data/v1/post', {
            headers : {'app-id' : import.meta.env.VITE_APP_ID}
        }).then(response => setCommonPosts(response.data.data))
    }, []);

    return [commonPosts, setCommonPosts];
}