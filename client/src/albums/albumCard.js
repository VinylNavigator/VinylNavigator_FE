import React from 'react'
import '../styles/albums/albumCard.css'

export default class AlbumCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <section className='row valign-center'>
                <img className='album-image col s5' src={this.props.albumCards.band_image}/> 
                <div className='album-card-content col s7'>
                    <p>This is the description section of the article being posted</p>
                    <p>Date</p> 
                </div> 
            </section> 
        )
    }
}