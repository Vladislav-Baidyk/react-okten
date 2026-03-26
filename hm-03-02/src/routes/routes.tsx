import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import { Outlet } from "react-router-dom";
export const routes = createBrowserRouter([
  {path:"/",element:<App/>, children: [
      {
        path: "users",
        element: (<div><h2>Users Section</h2><Outlet /></div>),
        children: [
          { path: "jsonplaceholder", element: <div>Users from JSONPlaceholder</div> },
          { path: "dummyjson", element: <div>Users from DummyJSON</div> }
        ]
      },
      {
        path: "posts",
        element: (<div><h2>Posts Section</h2><Outlet /></div>),
        children: [
          { path: "jsonplaceholder", element: <div>Posts from JSONPlaceholder</div> },
          { path: "dummyjson", element: <div>Posts from DummyJSON</div> }
        ]
      },
      {
        path: "comments",
        element: (<div><h2>Comments Section</h2><Outlet /></div>),
        children: [
          { path: "jsonplaceholder", element: <div>Comments from JSONPlaceholder</div> }
        ]
      }
    ]
  }
]);