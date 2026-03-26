import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
   <ul>
    <Link to={"users"}>UsersJson</Link>
    <Link to={"users"}>UserDummy</Link>
    <Link to={"posts"}>PostsJson</Link>
    <Link to={"posts"}>PostsDummy</Link>
    <Link to={"comments"}>CommJson</Link>
   </ul>
   <Outlet/>
  </>
  )
}

export default App
