
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'

const roots = createBrowserRouter([
  {path:"/",element:<App/>,children :[
    {path:"users",element:<div>Users</div>},
    {path:"posts",element:<div>Posts</div>},
    {path:"comments",element:<div>Comments</div>},
    {path:"products",element:<div>Products</div>},
  ]}
])
createRoot(document.getElementById('root')!).render(
  <RouterProvider router = {roots} />
)
