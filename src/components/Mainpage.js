import React from 'react'
import Crypto from './Crypto.js'
const axios = require('axios')



export default class Mainpage extends React.Component{

constructor() {
    super()
    this.state = {
        favorites: [],
        displaycrypto: [],
        crypto: [],
        nextP: 0,
        prevP: 0
}
}



// updating the favorites state and also bringing it back to its parents App.js

setFavorites = (addingfav) => {
    this.setState({
        favorites: addingfav
    })
     this.props.setFavoritesMP(addingfav)
  }


componentDidMount(){
    const fetching =  {
        method: 'GET',
        url: 'http://localhost:8000/crypto',
        
        
    } 
 axios.request(fetching).then((response) => this.setState({
     crypto: response.data.data,
    displaycrypto: response.data.data.slice(0,6),
    nextP: 6,
    prevP: 0
}))
}


displayCrypto = () => {
    return this.state.displaycrypto.map((elem, index) =>  
    <Crypto key={index} dataa={this.state.displaycrypto} data={elem} setFavorites={this.setFavorites}/>)
}

nextpage = () => {
    this.setState({
        displaycrypto: this.state.crypto.slice(this.state.nextP,(this.state.nextP+6)),
        nextP: this.state.nextP+6,
        prevP: this.state.nextP   
    })
}

previouspage = () => {
    this.setState({
        displaycrypto: this.state.crypto.slice((this.state.prevP-6),this.state.prevP),
        nextP: this.state.prevP,
        prevP: this.state.prevP-6
    })
}
 

render(){
    
    return(
        <div className='comp' >
                {this.displayCrypto()}
            <div className="btnpages">
                <button className='button' onClick={this.previouspage}>Previous page</button>
                <button className='button' onClick={this.nextpage}>Next page</button>
            </div>
        </div>
    )
}
}