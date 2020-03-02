import React from 'react'
import '../styles/albums/albumCard.css'

export default class AlbumCard extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className='album-cards-container'>
                <div className='image-container'>
                    <img /> 
                </div> 
                <div className='content-container'>
                    <h6>This is the description section of the article being posted</h6>
                    <p>Date</p> 
                </div> 
            </div> 
        )
    }
}