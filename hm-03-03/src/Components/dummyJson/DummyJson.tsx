import { useEffect, type FC } from "react"
import { FetchUrlDummy } from "../FetchC/FetchUrl"
type InputRoute = {
    name:string
}
export const DummyJson:FC<InputRoute> = ({name})  => {
    useEffect(() => {
        FetchUrlDummy(name)
            .then(data => console.log(data));
    },[name])
    return(
        <>

        </> 
    )
}