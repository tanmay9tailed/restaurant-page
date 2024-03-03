
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

import Page from './pages'
import Menu from './menu'
import Page5 from './components/page5/page5'
import Login from './components/login/login.jsx'
import SignUp from './components/SignUp/SignUp.jsx'

import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom"; 
import { CartProvider } from './components/contextReducer.jsx'
import Cart from './components/cart.jsx'
import MyOrder from './components/MyOrder.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Page/>} />
      <Route path='/#page5' element={<Page5/>} />
      <Route path='menu' element={<Menu/>} />
      <Route path='login' element={<Login/>} />
      <Route path='signup' element={<SignUp/>} />
      <Route path='myorder' element={<MyOrder/>} />
      <Route path='cart' element={<Cart/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)
