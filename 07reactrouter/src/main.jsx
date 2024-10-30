import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layoute from './layout.jsx'

import Home from './COMPONENT/Home/home.jsx'
import About from './COMPONENT/About/About.jsx'
import Contact from './COMPONENT/Contact/Contact.jsx'
import User from './COMPONENT/User/User.jsx'
// import Layout from './layout.jsx'
import Github from './COMPONENT/Github/Github.jsx'
// import {  } from "'.COMPONENT/Github/g'";


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layoute/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layoute/>}>
       <Route path='' element={<Home/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='contact' element={<Contact/>}/>
       <Route path='user/:userid' element={<User/>}/>
       <Route 
      //  loader={({githubinfoLoader})}
       path='github'
        element={<Github/>}
        />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
