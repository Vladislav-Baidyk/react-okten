import { getToDo } from "../FetchUrl/Functions"
import type { componentM } from "../modules/componentM"
import { Component } from "../ToDo component/Component"
import "./components.css"
import { useEffect, useState } from "react"

export const Components = () => {
    const[users,setUsers] = useState<componentM[] | []>([])
    useEffect(() =>{
        getToDo()
            .then(res =>{setUsers(res);});
            return() => {
                console.log('done');
            }
    },[]);
    return(
        <>
        <div className="grid">
                {users.map((user:componentM) => {
                    return <Component key={user.id} user={user} />
                })}
        </div>
        </>
    )
}