import React from 'react'
import '../styles/forms/forms.css'
import M from 'materialize-css'
import axios from 'axios'

export default class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '',
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

        axios.post(`${process.env.REACT_APP_LOGIN}`, this.state)
            .then(response => {
                this.setState({
                    username: '',
                    password: ''
                })
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('username', response.data.username)
                this.props.history.push('/')
                window.location.reload()
            })
            .catch(error => {
                console.log('There was an error logging the user in', error)
            })
    }

    render(){
        return(
            <div className="row form-container-background">
                <h1 style={{textAlign:'center'}}>Login</h1> 
                <form onSubmit={this.submitHandler} className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="text" className="validate" name='username' value={this.state.username} onChange={this.changeHandler}/>
                            <label htmlFor="email">Username</label>
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


