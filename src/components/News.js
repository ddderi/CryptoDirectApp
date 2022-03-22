import React from 'react'
import Article from './Article.js'
const axios = require('axios')

export default class News extends React.Component{
constructor(){
    super()
this.state = {
    feeds: [],
    article: [],
    nextP: 0,
    prevP: 0
}
}

// function for request the data news article in the back end http://localhost:8000/news + setstate this.state !

componentDidMount(){
    const fetching =  {
        method: 'GET',
        url: 'http://localhost:8000/news',
        
    } 
 axios.request(fetching).then((response) => this.setState({
     feeds: response.data.Data, 
     article: response.data.Data.slice(0,6),
     nextP: 6,
     prevP: 0
    }))
}

    
// for loop, pick 5 random articles and push them into a new array and RENDER() 5 news articles

//   randompicknews = () => {
//           let x = Math.floor(Math.random() * 44)
//             for (let i = x;i<(x+6);i++){if(this.state.feeds[i]===undefined){console.log('too long')}
//             else{this.state.article.push(this.state.feeds[i])}}

//             console.log(this.state.article)
//             if(this.state.article){
//                 return this.state.article.map((element, index) => <li className='liclass' key={index}><Article data={element}/></li>)
//             }
//         }  

picknews = () => {
    // console.log(this.state.article)
    return this.state.article.map((element, index) => <li className='liclass' key={index}><Article data={element}/></li>)
}

nextpage = () => {
    console.log(this.state.nextP)
    this.setState({
        article: this.state.feeds.slice(this.state.nextP,(this.state.nextP+6)),
        nextP: this.state.nextP+6,
        prevP: this.state.nextP
        
    })
     console.log(this.state.nextP)
     console.log(this.state.displaycrypto)
}

previouspage = () => {
    console.log(this.state.nextP)
    this.setState({
        article: this.state.feeds.slice((this.state.prevP-6),this.state.prevP),
        nextP: this.state.prevP,
        prevP: this.state.prevP-6
    })
    console.log(this.state.nextP)
}

    render(){
        return (
            <div className='feedscontainer'>
                <ul className='ulnews'> 
                    {this.picknews()}
                </ul>
                <div className="btnpages">
                    <button className='button' onClick={this.previouspage}>Previous page</button>
                    <button className='button' onClick={this.nextpage}>Next page</button>
                </div>
                
            </div>
        )}}

