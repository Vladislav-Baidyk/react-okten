import UserC from '../UserC/UserC.tsx';
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App.tsx';
import PostsC from '../Posts/PostsC.tsx';
import { PlaceHolderJson } from '../placeHolderJson/placeHolderJson.tsx';
import CommentsC from '../CommentsC.tsx';
import { DummyJson } from '../dummyJson/DummyJson.tsx';

export const  routes = createBrowserRouter([
  {path:"/", element:<App/>,children : [
    {path:"users",element:<UserC/>,children:[
    {path:"jsonplaceholder",element:<div><h1>Comment Json Place</h1> <PlaceHolderJson name={"users"}/></div>},
    {path:"dummyjson",element:<div><h1>Comment Dummy Place</h1> <DummyJson name={"users"}/></div>}]},

    {path:"posts",element:<PostsC/>,children:[
    {path:"jsonplaceholder",element:<div><h1>Posts Json Place</h1> <PlaceHolderJson name={"posts"}/></div>},
    {path:"dummyjson",element:<div><h1>Comment Dummy Place</h1> <DummyJson name={"posts"}/></div>}]},
    
    {path:"comments",element:<CommentsC/>,children:[
    {path:"jsonplaceholder",element:<div><h1>Comment Json Place</h1> <PlaceHolderJson name={"comments"}/></div>},
    {path:"dummyjson",element:<div><h1>Comment Dummy Place</h1> <DummyJson name={"comments"}/></div>}]},
  ]}
])