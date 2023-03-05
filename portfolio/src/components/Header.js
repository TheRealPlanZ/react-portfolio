import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Navbar bg="dark" variant="dark" expand="lg">
                      <Container>
                        <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="me-auto">
                            <Nav.Link href="#/" className="nav-link">About</Nav.Link>
                            <Nav.Link href="#/portfolio" className="nav-link">Portfolio</Nav.Link>
                            <Nav.Link href="#/resume" className="nav-link">Resume</Nav.Link>
                            <Nav.Link href="#/contact" className="nav-link">Contact</Nav.Link>
                          </Nav>
                        </Navbar.Collapse>
                      </Container>
                    </Navbar>
                    <Routes>
                        <Route exact={true} path="/" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </HashRouter>
        );
    }
}
export default Header;
