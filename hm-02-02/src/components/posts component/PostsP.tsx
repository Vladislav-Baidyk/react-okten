import { useEffect, useState } from "react"
import type { PostM } from "../modules/PostM"
import { GetPosts } from "../functions/FetchF";
import { PostC } from "../post component/PostC";
import "./PostP.css"
export const Posts = () => {
    const[posts,setPosts] = useState<PostM[] | []>([]);
    useEffect(() => {
        GetPosts()
            .then(res => setPosts(res)) ;
            return() => {
                console.log("done");
            }
    },[])
    
    return (
        <>
        <div className="container">
            {posts.map((post:PostM) => {return <PostC key={post.id} post = {post} />})}
        </div>
        </>
    )
}