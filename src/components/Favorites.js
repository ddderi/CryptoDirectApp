import React from 'react'
import FavoritesChild from './FavoritesChild'


export default class Favorites extends React.Component {

constructor(){
super()
this.state = {
    favorites: [],
    favoritesrender: []

}}

// update our state component when the props fav is changing (when we click on add to my fav)

componentDidUpdate(){
    if(this.state.favorites !== this.props.favorites){
    this.setState({favorites: this.props.favorites, 
        favoritesrender: this.props.favorites.slice(0,5),
        nextP: 5,
        prevP: 0
    })
}}

// render each favorite crypto 5 by 5

displayfavcrypto = () => {
    return this.state.favoritesrender.map((element, index) => <FavoritesChild key={index} data={element}/>)
}

nextpage = () => {
    
    this.setState({
        favoritesrender: this.state.favorites.slice(this.state.nextP,(this.state.nextP+5)),
        nextP: this.state.nextP+5,
        prevP: this.state.nextP
    })
}

previouspage = () => {
    this.setState({
        favoritesrender: this.state.favorites.slice((this.state.prevP-5),this.state.prevP),
        nextP: this.state.prevP,
        prevP: this.state.prevP-5
    })
}




    render(){
        console.log('render() method called')
        return(
             <div className='cryptofav'>
                {this.displayfavcrypto()}
                <div className="btnpages">
                    <button className='button' onClick={this.previouspage}>Previous page</button>
                    <button className='button' onClick={this.nextpage}>Next page</button>
                </div>
            </div>
        )
    }
}