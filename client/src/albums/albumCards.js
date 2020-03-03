import React from 'react'
import axios from 'axios'
import AlbumCard from './albumCard.js'
import '../styles/albums/albumCards.css'

export default class AlbumCards extends React.Component{
    constructor(){
        super()
        this.state = {
            albumCards: []
        }
    }

    componentDidMount(){
        this.renderCards()
    }

    renderCards = () => {
        axios.get(`${process.env.REACT_APP_POST_ALBUM}`)
            .then(response => {
                this.setState({
                    albumCards: response.data
                })
            })
            .catch(error => {
                console.log("There was an error rendering your data", error)
            })
    }


    render(){
        if(!this.state.albumCards){return 'loading data...'}
        console.log(this.state.albumCards)
        return(
            <div>
                {this.state.albumCards.map((item, index) => {
                    return <AlbumCard albumCards={item}
                               key={index}
                               /> 
                })}
                
            </div>
        )
    }
}