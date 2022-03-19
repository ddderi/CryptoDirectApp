import React from 'react'



export default class FavoritesChild extends React.Component {


    render(){
        return(
            <div  className='cryptofavchild'>
                {this.props.data}
            </div>
        )
    }
}