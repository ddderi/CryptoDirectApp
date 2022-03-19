import React from 'react'

export default class Crypto extends React.Component{

state = {
    cryptodisplay: [this.props.data]
}

//callback function for bring back to its parent Mainpage the state cryptodisplay

callback = (e) => {
   // e.preventDefault() useless
        this.setState({cryptodisplay: this.props.data})
        this.props.setFavorites(this.state.cryptodisplay)   
    }


render(){

    return(
        <div className='compchild' >
            {this.props.data}

            <button className='btnp' onClick={this.callback}>+</button>
            {/* <button className='btnm'>-</button> */}
        </div>
    )
}
}