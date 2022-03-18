import React from 'react'

export default class Crypto extends React.Component{


display = () => {
    const array = [1,2,3,4]
    return array.map((elem, index) => <div className='compchild' key={index}>{elem}</div>)
}



//https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR&api_key=695e7dc1d128f69a18550c819b0b8ef54fb81e67a8d293527b07c24eb7b146c8
//https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=BTC,USD,EUR&api_key=695e7dc1d128f69a18550c819b0b8ef54fb81e67a8d293527b07c24eb7b146c8

render(){

    return(
        <div className='comp' >
            {this.display()}
        </div>
    )
}
}