import React, {Component} from 'react';
import {
    NavLink,
} from 'react-router-dom';

import routes from '../../routes';
import './navigation.css';

export  class Navigation extends Component {
    render() {
        return (
            <nav className = 'main-nav'>
                { routes.filter(route => route.title && route.path).map((route, index) => (
                    <NavLink className = 'main-nav-link' key={index} exact to={route.path}>{ route.title }</NavLink>
                ))}
            </nav>
        )
    }
}


/*
 <nav>
                <NavLink exact to="/">Strona główna</NavLink>
                <NavLink to="/about">Podsumowanie</NavLink>
                <NavLink to="/income">Przychody</NavLink>
                <NavLink to="/spendings">Wydatki</NavLink>
                <NavLink to="/budget">Budżety</NavLink>
                <NavLink to="/chairs">Wykresy</NavLink>
            </nav>
 */