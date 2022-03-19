import React from 'react'

export default class Article extends React.Component {
    // render all the differents props for the components news

// change date 

dateFormat = () => {
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let newdate = new Date(this.props.data.published_on * 1000);
    let finalDate = (newdate.getDate())+' '+(months[newdate.getMonth()])+' '+(newdate.getFullYear())
    return finalDate
}

       render(){
            return (
                <div className='parentarticle'>
                    <h3 className='h3article'><a href={this.props.data.url}>{this.props.data.title}</a></h3>
                    <h5 className='h5article'>Published on : {this.dateFormat()}</h5>
                    <h5 className='h5article'>Tags: {this.props.data.tags}</h5>
                </div>    
            )}}


