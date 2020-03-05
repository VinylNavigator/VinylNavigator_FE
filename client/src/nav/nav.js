import React from 'react'
import '../styles/nav/nav.css'

export default class Nav extends React.Component{
    constructor(){
        super()
    }

    componentDidMount(){
    }

    render(){
        return(
            <nav>
                <h4>Vinyl Navigator</h4>
                <p>Spin 6</p>
                <p>Albums</p>
                <p>Movies</p>
                <p>Login</p>
                <button>Sign Up</button>
            </nav>        
        )
    }
}

