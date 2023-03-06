import React from 'react';

function About() {
  return (
    <section className="bg-dark text-light py-5">
      <div className="text-center">
        <h1 className="display-4 text-light mb-4">About Me</h1>
        <hr className="bg-primary w-25 mx-auto mb-4" />
        <p className="lead">
          I am a full stack web developer with a passion for learning new
          technologies and I am always looking for new opportunities. I have 11
          years of experience as a DJ/producer, and am excited to be on this new
          adventure.
        </p>
        <button className="btn btn-outline-light">See My Work</button>
      </div>
    </section>
  );
}

export default About;
