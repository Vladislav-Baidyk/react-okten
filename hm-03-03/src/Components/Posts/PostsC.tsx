import { Link, Outlet } from "react-router-dom"
export default function PostsC() {
  return (
    <div>
      <ul>
        <Link to={"jsonplaceholder"}>jsonplaceholderPost</Link>
        <Link to={"dummyjson"}>dummyjsonPost</Link>
        <Outlet/>
      </ul>
    </div>
  )
}
