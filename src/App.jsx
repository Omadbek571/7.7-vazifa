import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MyLayout from './layout/MyLayout'
import Home from './pages/Home'
import Card from './pages/Card'
import Products from './pages/Products'

function App() {
  return (
    <div className='container flex flex-col mx-auto'>
      <Routes>
        <Route path='/' element = {<MyLayout><Home></Home></MyLayout>}></Route>
        <Route path='/card' element = {<MyLayout><Card></Card></MyLayout>}></Route>
        <Route path='/products' element = {<MyLayout><Products></Products></MyLayout>}></Route>
      </Routes>
    </div>
  )
}

export default App