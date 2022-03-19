import React from 'react'
import Crypto from './Crypto.js'

export default class Mainpage extends React.Component{

constructor() {
    super()
    this.state = {
        favorites: []
    }
}

// updating the favorites state and also bringing it back to its parents App.js

setFavorites = (addingfav) => {
    this.setState({
        favorites: addingfav
    })
     this.props.setFavoritesMP(addingfav)
  }

// function for displaying earch crypto after fetching the data.

displayCrypto = () => {
    const array = [1,2,3,4,5,6,7,8,9,4,5,1,2,5,4]
    return array.map((elem, index) =>  <Crypto key={index} data={elem} myarray={array} setFavorites={this.setFavorites}/>)
}
 

render(){

    return(
        <div className='comp' >
            
                {this.displayCrypto()}
                {/* { <button onClick={this.testons}> test</button> } */}
            
        </div>
    )
}
}