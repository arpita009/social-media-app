import Box from '@mui/material/Box';
import MainContainer from "./MainContainer/MainContainer";
import Input from "./Input/Input.jsx";
import Navbar from './Navbar/Navbar';
import PostsContext from "../providers/PostsContext";
import {useState, useEffect} from "react";
import axios from "axios";

export default function SocialMedia() {
    const [commonPosts, setCommonPosts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyapi.io/data/v1/post', {
            headers : {'app-id' : import.meta.env.VITE_APP_ID}
        }).then(response => setCommonPosts(response.data.data))
    }, []);

    return(<Box sx={{mx: '0'}}>
        <PostsContext.Provider value={{commonPosts, setCommonPosts}}>
            <Navbar />
            <Input />
            <MainContainer />
        </PostsContext.Provider>
    </Box>)
}