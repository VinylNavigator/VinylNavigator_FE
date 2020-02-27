import React from 'react'
import '../styles/forms/forms.css'
import M from 'materialize-css'

export default class Register extends React.Component{
    constructor(){
        super()
    }

    componentDidMount(){
        M.AutoInit()
    }

    render(){
        return(
            <div>
                Register
            </div>
        )
    }
}
