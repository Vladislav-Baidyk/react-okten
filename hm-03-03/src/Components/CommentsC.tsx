import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
export default function CommentsC() {
  return (
    <div>
        <Link to={"jsonplaceholder"}>jsonplaceholderComment</Link>
        <Link to={"dummyjson"}>dummyjsonComment</Link>
        <Outlet />
    </div>
  )
}
