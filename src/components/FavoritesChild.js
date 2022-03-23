import React from 'react'


function FavoritesChild(props)  {    
     
const button = {
    position: 'absolute',
    right: '2px',
    top: '2px',
    paddingLeft: '4px',
    paddingRight: '4px' 
}
    
const click = (props) => {
    console.log(props)
}


const pricefixed = (props) => {
        if(props.data.quote.USD.price>10){
        return props.data.quote.USD.price.toFixed(1)
        }else if(props.data.quote.USD.price<10 && props.data.quote.USD.price>0.95){return props.data.quote.USD.price.toFixed(2)}
        else if(props.data.quote.USD.price<0.94){return props.data.quote.USD.price.toFixed(3)}
}

            return (
            <div  className='cryptofavchild'>
                <p className='pcomp'>{props.data.name} : ${pricefixed(props)} </p>
                <div className="cryptofavchildchild">
                    <p>Mkt/cap dom. : <br/>
                        {props.data.quote.USD.market_cap_dominance.toFixed(2)}%</p>
                    <p style={props.data.quote.USD.percent_change_1h>0 ? {color: 'green'}: {color: 'red'}}>1h % : <br/> 
                        {props.data.quote.USD.percent_change_1h.toFixed(4)}%</p>
                    <p style={props.data.quote.USD.percent_change_24h>0 ? {color: 'green'}: {color: 'red'}}>24h % : <br/>
                        {props.data.quote.USD.percent_change_24h.toFixed(4)}%</p>
                    <p style={props.data.quote.USD.percent_change_7d>0 ? {color: 'green'}: {color: 'red'}}>7d % : <br/>
                        {props.data.quote.USD.percent_change_7d.toFixed(4)}%</p>
                </div>
                <button onClick={click()} style={button}>X</button>
            </div>
            )
        }

export default FavoritesChild
