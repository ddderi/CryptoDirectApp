import React from 'react'
import moment from 'moment';
// functionnal component which render all the differents props for the components news

function Article(props){

const tags = {
    color: 'black'
}

 function myDate(d) { 
    let mydd = moment(d*1000).format("Do MMMM YYYY")
     return mydd
    } 

console.log(props.data.published_on[0])
            return (
                <div className='parentarticle'>
                    <a href={props.data.url}>
                    <h3 className='h3article'>{props.data.title}</h3>
                    <h5 className='h5article' style={tags}>Published on : {myDate(props.data.published_on)}</h5>
                    <h5 className='h5article' style={tags}>Tags: {props.data.tags}</h5>
                    </a>
                </div>    
            )}
        
            

export default Article

