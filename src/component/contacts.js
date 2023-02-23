import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import 'bulma/css/bulma.css';
import '../App.css';

function Contact() {
  const linkedinURL = 'https://www.linkedin.com/in/anuda-esarith-525420243/';
  const emailURL = 'mailto:anudaattanayake@gmail.com';
  const githubURL = 'https://github.com/ANEASER';
  const facebookURL = '#'; // update with Facebook profile URL

  return (
    <div>
      <div id="contact" className="my-3" style={{ color: 'rgb(31, 72, 255)', textAlign: 'center', fontSize: '220%' }}>CONTACT ME</div>
      <div className="main_container" style={{ margin: '1em', border: 'none' }}>
        <div className="sub_containers main_container" id="text" style={{ width: '100%' }}>
          <button className="button is-link m-4" onClick={() => window.open(linkedinURL)}>
            <FontAwesomeIcon icon={faLinkedin} className="pr-3" />
            Linkedin
          </button>
          <button className="button is-danger m-4" onClick={() => window.open(emailURL)}>
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
            Email
          </button>
          <button className="button is-dark m-4" onClick={() => window.open(githubURL)}>
            <FontAwesomeIcon icon={faGithub} className="pr-3" />
            GitHub
          </button>
          <button className="button is-info m-4" onClick={() => window.open(facebookURL)}>
            <FontAwesomeIcon icon={faFacebook} className="pr-3" />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
