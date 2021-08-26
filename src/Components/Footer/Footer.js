import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = (props) => {
    const {strFacebook, strInstagram, strTwitter} = props.teamInfo;
    return (
        <div className='footer' >
            <Link className='footer-icons' to={strFacebook} >
                <FontAwesomeIcon icon={faFacebook} size='2x' />
            </Link>
            <Link className='footer-icons' to={strTwitter}>
                <FontAwesomeIcon icon={faTwitter} size='2x' />
            </Link>
            <Link className='footer-icons' to={strInstagram}>
                <FontAwesomeIcon icon={faInstagram} size='2x' />
            </Link>

        </div>
    );
};

export default Footer;