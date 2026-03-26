import { useEffect, type FC } from "react"
import { FetchUrlPlace } from "../FetchC/FetchUrl";
type InputRoute = {
    name:string
}
export const PlaceHolderJson:FC<InputRoute> = ({name})  => {

    useEffect(() => {
            FetchUrlPlace(name)
            .then(data => console.log(data));
    },[name])
    return(
        <>

        </>
    )
}