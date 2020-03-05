import React from 'react'
import '../styles/albums/albumCard.css'

export default class AlbumCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='row'>
                <div className='col s4'>
                    <img  className='album-image' src={this.props.albumCards.band_image}/> 
                </div> 
                <div className='col s8'>
                    <h6>This is the description section of the article being posted</h6>
                    <p>Date</p> 
                </div> 
            </div> 
        )
    }
}