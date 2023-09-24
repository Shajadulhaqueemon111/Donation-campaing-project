import React from 'react'
import ReactDOM from 'react-dom/client'
import myCreateRouter from './Components/Router/Router'
import './index.css'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={myCreateRouter}></RouterProvider>
  </React.StrictMode>,
)
