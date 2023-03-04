import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Projects</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description}</p>
                        </div>
                    </div>
                </div>
             </div>

             </div>
    );
}

export default Projects;
