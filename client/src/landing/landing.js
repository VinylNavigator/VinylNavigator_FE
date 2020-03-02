import React from 'react'
import '../styles/landing/landing.css'
export default class Landing extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
              <div class="carousel">
                <a class="carousel-item" href="#one!"><img src='https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'/>hey</a>
                <a class="carousel-item" href="#two!"><img src='https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'/></a>
                <a class="carousel-item" href="#four!"><img src='https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'/></a>
                <a class="carousel-item" href="#five!"><img src='https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'/></a>
              </div>
            </div>         
            
        )
    }
}