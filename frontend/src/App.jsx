// import { useState } from 'react'
// import './App.css'
import Nav from './components/navbar/nav'
import {Outlet} from 'react-router-dom'


function App() {
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}

export default App
