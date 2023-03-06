import React from 'react';
import { Row } from 'react-bootstrap';
import Projects from './Projects';
import portfolio from '../portfolio.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio() {
    return (
        <div className="container my-5">
            <h1 className="my-5">Portfolio</h1>
            <Row className="row-cols-md-2 g-4 pb-5">
                {portfolio.map((project) => (
                    <Projects
                        key={project.id}
                        name={project.name}
                        image={project.image}
                        topics={project.topics}
                        deploy={project.deploy}
                        github={project.github}
                    />
                ))}
            </Row>
        </div>
    );
}

export default Portfolio;

