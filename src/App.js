import React from 'react'
import './App.css'
import Mainpage from './components/Mainpage'
import News from './components/News'
import Favorites from './components/Favorites'
import Navbar from './components/Navbar'


export default class App extends React.Component{

state = {
  favorites: []
}

//updated of the favorites states(to add the new favorites crypto in display) from mainpage children

setFavoritesMP = (newfav) => {
  this.setState({favorites: [...this.state.favorites, newfav]})
  
}

//update of the favorites state(to remove the choosen component) from favorites children

deletefav = (favdelete) => {
  this.setState({favorites: favdelete})
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
          <Favorites favorites={this.state.favorites} deletefav={this.deletefav}/>
      </div>
    </div>
  )}}



