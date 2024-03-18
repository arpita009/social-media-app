import Box from '@mui/material/Box';
import MainContainer from "./MainContainer/MainContainer";
import Input from "./Input/Input.jsx";
import PostsContext from "../providers/PostsContext";
import usePosts from '../hooks/usePosts';

export default function SocialMedia() {
    const [commonPosts, setCommonPosts] = usePosts();
    return(<Box sx={{mx: '0'}}>
        <PostsContext.Provider value={{commonPosts, setCommonPosts}}>
            <Input />
            <MainContainer />
        </PostsContext.Provider>
    </Box>)
}