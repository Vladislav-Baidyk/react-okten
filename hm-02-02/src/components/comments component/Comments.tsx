import { useEffect, useState } from "react"
import "../posts component/PostP.css"
import type { CommentM } from "../modules/CommentM"
import { GetComment } from "../functions/FetchF";
import { CommentC } from "../comment component/CommentC";
export const Comments = () => {

    const [comments,setComments] = useState<CommentM[] | []>([]);

    useEffect(() => {
        GetComment()
            .then(res => setComments(res)) ;
            return() => {
                console.log("done");
            }
    },[])

    return(
        <>
        <div className="container">
        {comments.map((comment:CommentM) => {return <CommentC comment={comment} />})}
        </div>
        </>
    )
}