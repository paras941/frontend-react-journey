import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>,
    },
    {
      path:"/about",
      element:<About/>,
    },
    {
      path:"/dashboard",
      element:<Dashboard/>,
    },
  ]
);

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <RouterProvider router={router}/>
        
      </div>
    
  )
}

export default App
