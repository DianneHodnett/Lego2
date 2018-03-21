import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './01-Home'
import About from './02-About'
import Product from './03-Product'


export default class Gather extends React.Component{
    render() {
        return (
            <div>
                <h1>My Company is Awesome</h1>
                <Router>
                    <div>
                        <p>This is an awesome company</p>
                        <Link to="/">Home Page</Link> | <Link to="/2">About Page</Link> | <Link to="/3">Product Page</Link>
                        <hr/>
                        <Route exact path="/" component={Home}/>
                        <Route path="/2" component={About}/>
                        <Route path="/3" component={Product}/>
                    </div>
                </Router>
            </div>
        )
    }
}

/*
This is the router page that routes to the different pages.
 */