import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects(props) {
  return (
    <div className="container">
      <h1>Projects</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src={require(`../assets/${props.image}`)} alt={props.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.topics}</p>
            </div>
            <div className="card-footer">
              <a href={props.deploy} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">Deployed Link</a>
              <a href={props.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Repository Link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;


