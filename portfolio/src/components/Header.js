import React from 'react';
import {Route, Redirect, Hashrouter} from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

class Header extends Component {
    render() {
        return (
            <Hashrouter>
                <div>
                    <Navigation/>
                    <Route exact path="/" component={About}/>
                    <Route exact path="/portfolio" component={Portfolio}/>
                    <Route exact path="/resume" component={Resume}/>
                    <Route exact path="/contact" component={Contact}/>
                </div>
            </Hashrouter>
        );
    }
}

export default Header;