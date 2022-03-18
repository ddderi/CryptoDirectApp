import React from 'react'
import Article from './article.js'
const axios = require('axios')

export default class News extends React.Component{
constructor(){
    super()
this.state = {
    feeds: [],
    article: []
}
}

// function for request the data news article in the back end http://localhost:8000/news + setstate this.state !

componentDidMount(){
    const fetching =  {
        method: 'GET',
        url: 'http://localhost:8000/news',
        
    } 
 axios.request(fetching).then((response) => this.setState({feeds: response.data.Data}))
}

    
// for loop, pick 5 random articles and push them into a new array and RENDER() 5 news articles

  boucle = () => {
          let x = Math.floor(Math.random() * 44)
            for (let i = x;i<(x+6);i++){if(this.state.feeds[i]===undefined){console.log('too long')}
            else{this.state.article.push(this.state.feeds[i])}}

            console.log(this.state.article)
            if(this.state.article){
                return this.state.article.map((element, index) => <li className='liclass' key={index}><Article data={element}/></li>)
            }}  

    render(){
        return (
            <div className='feedscontainer'>
                <ul className='ulnews'> 
                    {this.state.feeds ? this.boucle() : console.log('scope problems')}
                </ul>
            </div>
        )}}

