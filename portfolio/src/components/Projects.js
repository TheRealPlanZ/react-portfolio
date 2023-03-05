import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects(props) {
  return (
    <div className="container">
      <h1>Projects</h1>
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-4">
            <img src={props.image} alt={props.title} class="card-img-top"/>
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <p class="card-text">{props.description}</p>
            </div>
            <div className="card-footer">
              <a href={props.deployed} target="_blank" rel="noopener noreferrer" class="btn btn-primary me-2">Deployed Link</a>
              <a href={props.repo} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Repository Link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
