import type { FC } from "react"
import type { PersonM } from "../modules/personM"
import "./person.css";

type PersonProps ={
        person : PersonM;
}
export const Person:FC<PersonProps> = ({person}) => {
    return(
        <>
            <div className="box">
                <div className="circle"></div>
                <div className="box-content">
                    <img className="photo" src={person.photo} alt="photo" />
                    <div className="header">{person.name} {person.surname}</div>
                    <div className="info">{person.info}</div>
                </div>
            </div>
        </>
    )
}