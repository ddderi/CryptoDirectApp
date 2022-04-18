import React from 'react'


export default class Crypto extends React.Component{

state = {
    cryptodisplay: [this.props.data],
    fav: []
}



//callback function for bring back to its parent Mainpage the state cryptodisplay

callback = () => {
   
         this.setState({cryptodisplay: this.props.data})
        this.props.setFavorites(this.props.data) 
          
    }

// ifthis.props.data.max_supply is not provided, 'Max supply' string wont display

maxsupply = () => {
    if(this.props.data.max_supply!==null){
        return this.props.data.max_supply
        
    }else{return 'unlimited/unknown'}
}

// fixing the integer after the comma

pricefixed = () => {
    let Cryptoprice = this.props.data.quote.USD.price
    if(Cryptoprice>10){
        return Cryptoprice.toFixed(1)
    }else if(Cryptoprice<10 && Cryptoprice>0.95){return Cryptoprice.toFixed(2)}
    else if(Cryptoprice<0.94){return Cryptoprice.toFixed(3)}
}


render(){

    return(
        <div className='compchild' >
            <div className="firstblock">
                <p className='pcomp'>{this.props.data.name}</p>
                <p className='pcomp'>tokens circulating :</p>
                {this.props.data.circulating_supply.toFixed(0)}<br/>
                <p className='pcomp'>Max.supply : </p>
                {this.maxsupply()}
            </div>
            <div className="secondblock">
                ${this.pricefixed()}
            </div>
            <div className="thirdblock">
                24h % :<br/>
                {this.props.data.quote.USD.percent_change_24h.toFixed(2)}%
            </div>
            <button className='btnp' onClick={this.callback}>add to my fav</button>
        </div>
    )
}
}