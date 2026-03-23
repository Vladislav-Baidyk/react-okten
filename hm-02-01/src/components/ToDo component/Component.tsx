import "./component.css"
import type { FC } from "react"
import type { componentM } from "../modules/componentM"

type UserProps = {
    user : componentM
}
export const Component:FC<UserProps> = ({user}) => {
    return(
        <>
            <div className="user">
                <div className="user-box">
                    <div className="user-header">
                        {user.userId} {user.id}
                    </div>

                    <div className="user-title">{user.title}</div>
                    {user.completed ? 
                    (<div className="completed">User completed</div>)
                     : 
                     (
                        <div className="completed">User didn't complete</div>
                     )}
                </div>
            </div>
        </>
    )
}