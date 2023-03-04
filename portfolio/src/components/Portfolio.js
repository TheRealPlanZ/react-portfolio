import React from 'react';
import Projects from './Project';
import portfilio from '../portfolio.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <div class="row">
                {portfilio.map((project) => (
                    <Projects
                        key={project.id}
                        name={project.name}
                        image={project.image}
                        description={project.description}
                        deployed={project.deployed}
                        repo={project.repo}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;