import type { PostM } from "../modules/PostM"
import type { FC } from "react"
import "./PostC.css"
type PostProp = {
    post : PostM;
}
export const PostC:FC<PostProp> = ({post}) => {
    return (
        <>
        <div className="box">
            <div className="box-content">
                <div className="box-header">
                  ID : {post.id}, userId :{post.userId}
                </div>
                <div className="box-title">
                    {post.title}
                </div>
                <div className="box-body">
                    {post.body}
                </div>
            </div>
        </div>
        </>
    )
}