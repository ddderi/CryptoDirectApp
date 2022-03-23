import React from 'react'
// functionnal component which render all the differents props for the components news

function Article(props){

// change date 
const dateFormat = (props) => {
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let newdate = new Date(props.data.published_on * 1000);
    let finalDate = (newdate.getDate())+' '+(months[newdate.getMonth()])+' '+(newdate.getFullYear())
    return finalDate
}
            return (
                <div className='parentarticle'>
                    <h3 className='h3article'><a href={props.data.url}>{props.data.title}</a></h3>
                    <h5 className='h5article'>Published on : {dateFormat(props)}</h5>
                    <h5 className='h5article'>Tags: {props.data.tags}</h5>
                </div>    
            )}
        
            

export default Article
