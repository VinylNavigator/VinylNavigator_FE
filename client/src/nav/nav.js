import React from 'react'
import '../styles/nav/nav.css'
import M from 'materialize-css'

export default class Nav extends React.Component{
    constructor(){
        super()
    }

    componentDidMount(){
        M.AutoInit()
    }

    render(){
        return(
            <div className='navbar-fixed'>
                <nav className='black'>
                  <div className="nav-wrapper">
                    <a href="#!" className="white-text brand-logo">Vinyl Navigator</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className=" white-text material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                      <li><a href="sass.html">Sass</a></li>
                      <li><a href="badges.html">Components</a></li>
                      <li><a href="collapsible.html">Javascript</a></li>
                      <li><a href="mobile.html">Mobile</a></li>
                    </ul>
                  </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                  <li><a href="sass.html">Sass</a></li>
                  <li><a href="badges.html">Components</a></li>
                  <li><a href="collapsible.html">Javascript</a></li>
                  <li><a href="mobile.html">Mobile</a></li>
                </ul>             
            </div>
        )
    }
}

