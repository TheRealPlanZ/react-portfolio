import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <div class="bg-dark py-3">
      <div class="container text-center">
        <a href="https://github.com/therealplanz" class="text-white mx-2"><FontAwesomeIcon icon={faGithubSquare} size="2x" /></a>
        <a href="https://www.linkedin.com/in/therealplanz/" class="text-white mx-2"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
        <a href="https://twitter.com/therealplanz" class="text-white mx-2"><FontAwesomeIcon icon={faTwitterSquare} size="2x" /></a>
      </div>
    </div>
  );
}

export default Footer;
