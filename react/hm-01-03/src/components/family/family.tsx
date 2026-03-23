import "./family.css";
import { simpsons } from "../array";
import type { PersonM } from "../modules/personM";
import { Person } from "../person/person";
export const Family = () => {
    return(
        <>
        <div className="grid">
        <h1 className="header-res">The Residents</h1>
        <div className="grid-content">
                {simpsons.map((simpson:PersonM) => {
            return <Person person={simpson} />
        })}
        </div>
        </div>
        </>
    )
}