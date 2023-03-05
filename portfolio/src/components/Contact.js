import React, { useState } from 'react';
import { validateEmail } from '../utils/helper';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    
    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
      <section class="bg-dark text-light py-5" id="contact">
          <div class="row mb-5">
              <div class="col-lg-12 col-md-12">
                  <h1 class="heading text-center">Contact Me</h1>
                  <hr class="divider-sm bg-primary" />
                  <p class="lead text-muted text-center">Please fill out the form below to send me a message!</p>
              </div>
          </div>

          <div class="row justify-content-center">
              <div class="col-lg-8 col-md-10 col-sm-12">
                  <form onSubmit={handleSubmit}>
                      <div class="form-group">
                          <label htmlFor="name">Name</label>
                          <input type="text" class="form-control" name="name" defaultValue={name} onBlur={handleChange} />

                          <label htmlFor="email">Email Address</label>
                          <input type="email" class="form-control" name="email" defaultValue={email} onBlur={handleChange} />

                          <label htmlFor="message">Message</label>
                          <textarea rows="5" class="form-control" name="message" defaultValue={message} onBlur={handleChange} />

                          {errorMessage && (
                              <div>
                                  <p class="error-text">{errorMessage}</p>
                              </div>
                          )}

                          <button type="submit" class="btn btn-lg btn-light mt-3">Submit</button>
                      </div>
                  </form>
              </div>  
          </div>
      </section>
    );
}

export default ContactForm;
