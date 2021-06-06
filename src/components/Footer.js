import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebook, faLinkedin, faGithub, faGooglePlus, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer>
            <div class="footerIcons">
                <FontAwesomeIcon size="lg" color="white" icon={faTwitterSquare} />
                <FontAwesomeIcon size="lg" color="white" icon={faFacebook} />
                <FontAwesomeIcon size="lg" color="white" icon={faLinkedin} />
                <FontAwesomeIcon size="lg" color="white" icon={faGithub} />
                <FontAwesomeIcon size="lg" color="white" icon={faGooglePlus} />
                <FontAwesomeIcon size="lg" color="white" icon={faYoutube} />
            </div>
        </footer>)
}