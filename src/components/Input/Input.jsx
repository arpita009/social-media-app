import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState, useContext} from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import axios from "axios";
import PostsContext from "../../providers/PostsContext.jsx";

export default function Input() {
    const [postText, setPostText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const {commonPosts, setCommonPosts} = useContext(PostsContext);

    const createPost = async () => {
        setIsLoading(true);
        axios.post("https://dummyapi.io/data/v1/post/create",
            {
                owner: '60d0fe4f5311236168a109ca',
                text: postText,
                likes: 1,
                image: imageUrl,
                publishDate: new Date()
            },
            {
                headers: {'app-id': import.meta.env.VITE_APP_ID}
            }
        )
            .then((res) => {
                setIsLoading(false);
                setPostText('');
                setImageUrl('');
                setCommonPosts([res.data, ...commonPosts])
            })
    }

    return(
        <Box
            sx={{ mt:'1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center' }}>
            <TextField fullWidth
                       value={postText}
                       onChange={(e) => setPostText(e.target.value)}
                       id="fullWidth"
                       label="Type your post"
                       variant="outlined" />
            <TextField fullWidth
                       value={imageUrl}
                       onChange={(e) => setImageUrl(e.target.value)}
                       sx={{ mt: '1rem', mb: '1rem' }}
                       id="fullWidth"
                       label="Your image"
                       variant="outlined" />
            {isLoading ?  <LoadingButton loading variant="outlined">
                Submit
            </LoadingButton>: <Button onClick={createPost}
                                      variant="contained">Submit</Button>}
        </Box>
    )
}