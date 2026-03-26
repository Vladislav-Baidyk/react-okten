import { Link, Outlet } from "react-router-dom"

export default function UserC() {
  return (
    <div>
      <ul>
        <Link to={"jsonplaceholder"}>jsonplaceholder</Link>
        <Link to={"dummyjson"}>dummyjson</Link>
        <Outlet/>
      </ul>
    </div>
  )
}
