import React from 'react'
import FavoritesChild from './FavoritesChild'


export default class Favorites extends React.Component {

constructor(){
super()
this.state = {
    favorites: [],
    favoritesrender: [],
    remove: null

}}



// componentDidUpdate will re-render our comp when we update our state component 
// at the time the props favorites is changing (when we click on add to my fav)

componentDidUpdate(){
    if(this.state.favorites !== this.props.favorites){
    this.setState({favorites: this.props.favorites, 
        favoritesrender: this.props.favorites.slice(0,5).filter(element => element),
        nextP: 5,
        prevP: 0
    })
    // 2nd if statement if this.state.remove is not null, filter function on the displayed array, to remove the component we clicked on
    }else if(this.state.remove !== null){    
    this.setState({
        favoritesrender: this.props.favorites.filter(element => element.id !== this.state.remove ),
            remove: null
    }) 
    //bring back to parent element (app.js) for updating the array of favorites when we remove one component fav
    this.props.deletefav(this.props.favorites.filter(element => element.id !== this.state.remove ))
    }}



// render each favorite crypto 5 by 5

displayfavcrypto = () => {
    return this.state.favoritesrender.map((element, id) => <FavoritesChild key={id} setRemove={this.setRemove} index={id} data={element}/>)
}

// function setRemove used as callback function in its children element for bringing back the id we want to remove
// and in the same time set the state remove of this next id removed element

setRemove = (idremove) => {
    this.setState({
        remove: idremove
    })}


nextpage = () => {
        this.setState({
        favoritesrender: this.state.favorites.slice(this.state.nextP,(this.state.nextP+5)),
        nextP: this.state.nextP+5,
        prevP: this.state.nextP
        })}

previouspage = () => {
        this.setState({
        favoritesrender: this.state.favorites.slice((this.state.prevP-5),this.state.prevP),
        nextP: this.state.prevP,
        prevP: this.state.prevP-5
        })}




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