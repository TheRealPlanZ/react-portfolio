import React from 'react';
import { Row } from 'react-bootstrap';
import Projects from './Projects';
import portfolio from '../portfolio.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio() {
    return (
        <div class="container my-5">
            <h1 class="my-5">Portfolio</h1>
            <Row class="row-cols-md-2 g-4 pb-5">
                {portfolio.map((project) => (
                    <Projects
                        key={project.id}
                        name={project.name}
                        image={project.image}
                        description={project.description}
                        deployed={project.deployed}
                        repo={project.repo}
                    />
                ))}
            </Row>
        </div>
    );
}

export default Portfolio;

