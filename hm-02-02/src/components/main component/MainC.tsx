import "./Main.css";
import { Posts } from "../posts component/PostsP";
import { Comments } from "../comments component/Comments";
export const Mainc = () => {
    return(
        <>
    <div className="container-main">
        <Posts />
        <Comments />
    </div>
        </>
    )
}