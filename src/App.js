import React from 'react'
import './App.css'
import Mainpage from './components/Mainpage'
import News from './components/News'
import Favorites from './components/Favorites'
import Navbar from './components/Navbar'


export default class App extends React.Component{
// bring back the new fav with call back function
// bug, quand je clique pour fav, cela fetch 6 articles news a nouveau. si je ne ramene pas le new fav dans la main page le bug disparait ??

state = {
  favorites: []
}

setFavoritesMP = (newfav) => {
  this.setState({favorites: [...this.state.favorites, newfav]})
  
}


  render(){
  return (
    <div className="main">

      <div className='newsfeed'>
        <h1 className='htitle'>New feed</h1>
        <News />
      </div>
      <div className='mainpage'>
          <h1 className='htitle'>Cryptodirect</h1>
          <Navbar />
          <Mainpage setFavoritesMP={this.setFavoritesMP} /> 
      </div>
      <div className="fav">
          <h1 className='htitle'>Favorite crypto</h1>
          <Favorites favorites={this.state.favorites}/>
      </div>
    </div>
  )
}}



