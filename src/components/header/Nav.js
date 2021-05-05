import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

export class Nav extends Component {
    render() {
        return (
            <header>              
                <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Operation">Operaciones</Link></li>
                        <li><Link to="/Login">Login / Register</Link></li>
                        <li className="close">X</li>
                </ul>
                <div className="menu">Menu</div>
            </header>
        )
    }
}

export default Nav
