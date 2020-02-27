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

        axios.post('https://vinylnavigator.herokuapp.com/api/auth/register', this.state)
            .then(response => {
                console.log(response)
                this.setState({
                    username: '',
                    email: '',
                    password: ''
                })
                this.props.history.push('/login')
            })
            .catch(error => {
                console.log('there was an error posting your content')
            })
        
    }

    render(){
        return(
            <div className="row">
                <h1 style={{textAlign: 'center'}}>Register</h1> 
                <form onSubmit={this.submitHandler} className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="username" type="text" className="validate" name='username' value={this.state.username} onChange={this.changeHandler}/>
                            <label htmlFor="username">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" name='email' value={this.state.email} onChange={this.changeHandler} className="validate"/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" name='password' value={this.state.password} onChange={this.changeHandler} className="validate"/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
          </div>
        )
    }
}
