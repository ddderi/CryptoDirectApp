import React from 'react'
// functionnal component which render all the differents props for the components news

function Article(props){

const tags = {
    color: 'black'
}


// change date 
const dateFormat = (props) => {
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let newdate = new Date(props.data.published_on * 1000);
    let finalDate = (newdate.getDate())+' '+(months[newdate.getMonth()])+' '+(newdate.getFullYear())
    return finalDate
}

            return (
                <div className='parentarticle'>
                    <a href={props.data.url}>
                    <h3 className='h3article'>{props.data.title}</h3>
                    <h5 className='h5article' style={tags}>Published on : {dateFormat(props)}</h5>
                    <h5 className='h5article' style={tags}>Tags: {props.data.tags}</h5>
                    </a>
                </div>    
            )}
        
            

export default Article
