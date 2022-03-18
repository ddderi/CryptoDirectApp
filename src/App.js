import React from 'react'
import './App.css'
import Crypto from './components/crypto'
import News from './components/news'

const App = () => {
  return (
    <div className="main">
      <div className='newsfeed'>
        <h1>New feed</h1>
        <News />
        </div>
      <div className='mainpage'>
        <h1>cryptodirect</h1>
        <p className='navbar'>navbar</p>
        <Crypto />
      
      </div>
        <div className="fav">
        <h1>favorite crypto</h1>
        </div>
    </div>
  )
}

export default App

