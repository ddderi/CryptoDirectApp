import React from 'react'

export default class Article extends React.Component {
    // render all the differents props for the components news
       render(){
            return (
                <div className='parentarticle'>
                    <h3 className='h3test'><a href={this.props.data.url}>{this.props.data.title}</a></h3>
                    <h5 className='h5test'>Tags: {this.props.data.tags}</h5>
                </div>    
            )}}

// date format 


// let unix_timestamp = 1647551155
// // Create a new JavaScript Date object based on the timestamp
// // multiplied by 1000 so that the argument is in milliseconds, not seconds.
// var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
// var newuni = new Date(unix_timestamp * 1000);
// var year = newuni.getFullYear()
// var month = months[newuni.getMonth()];
// var date = newuni.getDate();
// // Hours part from the timestamp
// console.log(year)
// console.log(month)
// console.log(date)
