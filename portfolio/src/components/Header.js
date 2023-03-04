import React from 'react';
import {Route, HashRouter} from 'react-router-dom';
import Navigation from './Navigation';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

class Header extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Navigation/>
                    <Route exact path="/" component={About}/>
                    <Route exact path="/portfolio" component={Portfolio}/>
                    <Route exact path="/resume" component={Resume}/>
                    <Route exact path="/contact" component={Contact}/>
                </div>
            </HashRouter>
        );
    }
}

export default Header;