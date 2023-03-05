import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <NavLink class="navbar-brand" to="/">My Website</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item m-2">
                            <NavLink class="nav-link" activeclass="active" exact to="/">Home</NavLink>
                        </li>
                        <li class="nav-item m-2">
                            <NavLink class="nav-link" activeclass="active" to="/about">About</NavLink>
                        </li>
                        <li class="nav-item m-2">
                            <NavLink class="nav-link" activeclass="active" to="/portfolio">Portfolio</NavLink>
                        </li>
                        <li class="nav-item m-2">
                            <NavLink class="nav-link" activeclass="active" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
