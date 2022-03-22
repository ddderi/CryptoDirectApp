import React from 'react'



export default class FavoritesChild extends React.Component {


    pricefixed = () => {
        if(this.props.data.quote.USD.price>10){
            return this.props.data.quote.USD.price.toFixed(1)
        }else if(this.props.data.quote.USD.price<10 && this.props.data.quote.USD.price>0.95){return this.props.data.quote.USD.price.toFixed(2)}
        else if(this.props.data.quote.USD.price<0.94){return this.props.data.quote.USD.price.toFixed(3)}
    }

    render(){
        return(
            <div  className='cryptofavchild'>
                <p className='pcomp'>{this.props.data.name} :  ${this.pricefixed()} </p>
                <div className="cryptofavchildchild">
                    <p>Mkt/cap dom. : <br/>
                        {this.props.data.quote.USD.market_cap_dominance.toFixed(2)}%</p>
                    <p style={this.props.data.quote.USD.percent_change_1h>0 ? {color: 'green'}: {color: 'red'}}>1h % : <br/> 
                        {this.props.data.quote.USD.percent_change_1h.toFixed(4)}%</p>
                    <p style={this.props.data.quote.USD.percent_change_24h>0 ? {color: 'green'}: {color: 'red'}}>24h % : <br/>
                        {this.props.data.quote.USD.percent_change_24h.toFixed(4)}%</p>
                    <p style={this.props.data.quote.USD.percent_change_7d>0 ? {color: 'green'}: {color: 'red'}}>7d % : <br/>
                        {this.props.data.quote.USD.percent_change_7d.toFixed(4)}%</p>
                </div>
            </div>
        )
    }
}