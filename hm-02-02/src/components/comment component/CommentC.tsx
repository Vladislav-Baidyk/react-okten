import "../post component/PostC.css"
import type { FC } from "react"
import type { CommentM } from "../modules/CommentM"
type CommentProps ={
    comment : CommentM
}
export const CommentC:FC<CommentProps> = ({comment}) => {
    return (
        <>
<div className="box">
            <div className="box-content">
                <div className="box-header">
                  ID : {comment.id}, userId :{comment.postId}, Name : {comment.name}
                </div>
                <div className="box-title">
                   {comment.email}
                </div>
                <div className="box-body">
                    {comment.body}
                </div>
            </div>
        </div>
        </>
    )
}