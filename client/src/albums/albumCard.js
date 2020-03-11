import React from 'react'
import '../styles/albums/albumCard.css'

export default class AlbumCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div class="row">
                <div class="col s12 m6">
                    <div class="card horizontal">
                        <div class="card-image center-align valign-wrapper">
                           <img src={this.props.albumCards.band_image}/>
                        </div>
                        <div class="card-stacked">
                            <div class="card-content">
                              <span class="card-title">Horizontal</span>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}