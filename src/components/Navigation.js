import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">My Website</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item m-2">
                            <NavLink className="nav-link" activeclass="active" exact to="/">Home</NavLink>
                        </li>
                        <li class="nav-item m-2">
                            <NavLink className="nav-link" activeclass="active" to="/about">About</NavLink>
                        </li>
                        <li class="nav-item m-2">
                            <NavLink className="nav-link" activeclass="active" to="/portfolio">Portfolio</NavLink>
                        </li>
                        <li class="nav-item m-2">
                            <NavLink className="nav-link" activeclass="active" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
