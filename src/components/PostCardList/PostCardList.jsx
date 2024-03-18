import PostCard from "../PostCard";
import {useContext} from "react";
import PostsContext from "../../providers/PostsContext";

export default function PostCardList() {
    const {commonPosts} = useContext(PostsContext)

    return (
        !commonPosts.length ? 'loading..' : commonPosts.map(post => <PostCard
                key={post.id}
                image={post.image}
                content={post.text}
                author={post.owner}
                publishDate={post.publishDate}
            />
        )
    )
}
