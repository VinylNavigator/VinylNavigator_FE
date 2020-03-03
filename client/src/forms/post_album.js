import React from 'react'
import axios from 'axios'
import '../styles/forms/post_album.css'
export default class PostAlbum extends React.Component{
    constructor(){
        super()
        this.state = {
            band: '',
            album: '',
            year: '',
            members: '',
            tracks: '',
            buzz_track: '',
            content: '',
            album_image: '',
            band_image: '',
            link: '',
            youtube: '',
            genre: '',
            keyword: '',
            similar: ''
        }
    }

    changeHandler = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        axios.post(`${process.env.REACT_APP_POST_ALBUM}` , this.state)
            .then(response => {
                console.log(response)
                this.setState = ({
                    band: '',
                    album: '',
                    year: '',
                    members: '',
                    tracks: '',
                    buzz_track: '',
                    content: '',
                    album_image: '',
                    band_image: '',
                    link: '',
                    youtube: '',
                    genre: '',
                    keyword: '',
                    similar: ''
                })              
            })
            .catch(error => {
                console.log("There was an error posting your data", error)
            })
    }

    render(){
        return(
            <form onSubmit={this.submitHandler} className='post_album-container'>
                <div> 
                <input name='band' 
                       placeholder='band' 
                       onChange={this.changeHandler} 
                       type='text'
                       value={this.state.band} 
                />
                <input name='album' 
                       placeholder='album' 
                       onChange={this.changeHandler} 
                       type='text'
                       value={this.state.album} 
                />
                <input name='year' 
                       placeholder='year' 
                       onChange={this.changeHandler} 
                       type='text'
                       value={this.state.year} 
                />
                <input name='members' 
                       placeholder='members' 
                       onChange={this.changeHandler} 
                       type='text'
                       value={this.state.members} 
                />
                <input name='tracks' 
                       placeholder='Tracks' 
                       onChange={this.changeHandler} 
                       type='text'
                       value={this.state.tracks} 
                />
                <input name='buzz_track' 
                       placeholder='Buzz track' 
                       onChange={this.changeHandler} 
                       type='text'
                       value={this.state.buzz_track} 
                />
                <input name='album_image' 
                       placeholder='Album image' 
                       onChange={this.changeHandler} 
                       type='text'
                       value={this.state.album_image} 
                />
                <input name='band_image' 
                       placeholder='Band Image' 
                       onChange={this.changeHandler} 
                       type='text'
                       value={this.state.band_image} 
                />
                <input name='link' 
                       placeholder='Link' 
                       onChange={this.changeHandler} 
                       type='text'
                       value={this.state.link} 
                />
                <input name='youtube' 
                       placeholder='YouTube' 
                       onChange={this.changeHandler} 
                       type='text'
                       value={this.state.youtube} 
                />
                <input name='genre' 
                       placeholder='Genre' 
                       onChange={this.changeHandler} 
                       type='text'
                       value={this.state.genre} 
                />
                <input name='keyword' 
                       placeholder='keyword' 
                       onChange={this.changeHandler} 
                       type='text'
                       value={this.state.keyword} 
                />         
                <input name='similar' 
                       placeholder='Similar' 
                       onChange={this.changeHandler} 
                       type='text'
                       value={this.state.similar} 
                />        
                </div> 
                <div>   
                    <textarea name='content'
                              placeholder='content'
                              onChange={this.changeHandler}
                              type='text'
                              value={this.state.content}
                    /> 
                </div> 
                <div> 
                <button class="btn waves-effect waves-light" type="submit">Submit
                    <i class="material-icons right">send</i>
                </button>        
                </div>                   
            </form>
        )
    }
}