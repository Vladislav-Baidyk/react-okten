import { Link, Outlet } from "react-router-dom"
export default function App() {
  return (
    <div>
      <ul>
        <Link to={"users"}>USERS</Link>
        <Link to={"posts"}>POSTS</Link>
        <Link to={"comments"}>COMMENTS</Link>

      </ul>
      <Outlet/>
    </div>
  )
}
