import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/home/Home'

import About from './pages/about/About'
import AboutCompany from './pages/about/AboutCompany'
import AboutMe from './pages/about/AboutMe'

import Members from './pages/members/Members'
import Member from './pages/members/Member'

import Items from './pages/item/Items'
import Item from './pages/item/Item'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/login/Login'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* Page Home */}
        <Route path='/' element={<Home />} />

        {/* Sub-Page Nested About */}
        <Route path='/about' element={<About />}>
          <Route path='about-company' element={<AboutCompany />} />
          <Route path='about-me' element={<AboutMe />} />
        </Route>

        {/* URL Paramater Members */}
        <Route path='/members' element={<Members />}>
          <Route path=':memberName' element={<Member />} />
        </Route>

        {/* Programmatic Navigation Page Items */}
        <Route
          path='/items'
          element={
            <ProtectedRoute>
              <Items />
            </ProtectedRoute>
          }>
          <Route path=':itemId' element={<Item />} />
        </Route>

        {/* Login  */}
        <Route path='/login' element={<Login />} />
      </Routes>
    </div >
  )
}

export default App
