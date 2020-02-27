import React from 'react'
import '../styles/forms/forms.css'
import M from 'materialize-css'
import axios from 'axios'

export default class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    componentDidMount(){
        M.AutoInit()
    }

    changeHandler = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        
    }

    render(){
        return(
            <div class="row">
                <h1 style={{textAlign: 'center'}}>Register</h1> 
                <form onSubmit={this.submitHandler} class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="email" type="text" class="validate" name='username' value={this.state.username} onChange={this.changeHandler}/>
                            <label for="email">Username</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="email" type="email" name='email' value={this.state.email} onChange={this.changeHandler} class="validate"/>
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="password" type="password" name='password' value={this.state.password} onChange={this.changeHandler} class="validate"/>
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i class="material-icons right">send</i>
                    </button>
                </form>
          </div>
        )
    }
}
