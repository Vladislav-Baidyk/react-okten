import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
<BrowserRouter>
    <Routes>
      <Route path={'/'} element={<App/>}>
        <Route path={'users'} element={<div>Users</div>}></Route>
        <Route path={'posts'} element={<div>Posts</div>}></Route>
        <Route path={'products'} element={<div>Products</div>}></Route>
        <Route path={'comments'} element={<div>Comments</div>}></Route>
      </Route>
    </Routes>
</BrowserRouter>
)
