import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
    <ul>
      <Link to ={'/'}>Main</Link>
      <Link to ={'users'}>users</Link>
      <Link to ={'posts'}>posts</Link>
      <Link to ={'comments'}>comments</Link>
      <Link to ={'products'}>products</Link>
    </ul>
    <Outlet></Outlet>
    </>
  )
}

export default App
