import PostCard from "../PostCard";
import {useState, useEffect} from "react";
import axios from "axios";

export default function PostCardList() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://dummyapi.io/data/v1/post', {
            headers : {'app-id' : import.meta.env.VITE_APP_ID}
        }).then(response => setPosts(response.data.data))
    }, []);

    return (
        !posts.length ? 'loading..' : posts.map(post => <PostCard
                key={post.id}
                image={post.image}
                content={post.text}
                author={post.owner}
                publishDate={post.publishDate}
            />
        )
    )
}
