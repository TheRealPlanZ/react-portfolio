import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
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
                    <Navigation />
                    <Routes>
                        <Route exact path="/" element={<About />} />
                        <Route exact path="/portfolio" element={<Portfolio />} />
                        <Route exact path="/resume" element={<Resume />} />
                        <Route exact path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </HashRouter>
        );
    }
}

export default Header;
