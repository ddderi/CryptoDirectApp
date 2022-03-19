import React from 'react'
import FavoritesChild from './FavoritesChild'


export default class Favorites extends React.Component {

tessst = () => {
    return this.props.favorites.map((element, index) => <FavoritesChild key={index} data={element}/>)
}

    render(){
        console.log('render() method called')
        return(
             <div className='cryptofav'>
                {this.tessst()}
            </div>
        )
    }
}