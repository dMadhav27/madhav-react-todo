// Footer.js

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div style={{ marginTop: 'auto', textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif', fontSize: '16px', color: 'white' }}>
      <p>© 2024 Madhav Dhobley.</p>
      <a href='https://madhav-react-portfolio.netlify.app/' style={{ fontSize: '14px', color: 'white' }}>Click here to view my portfolio!</a>

      {/* Social Icons */}
      <div style={{ marginTop: '15px' }}>
        <FontAwesomeIcon icon={faLinkedin} size='2x' style={{ margin: '5px', cursor: 'pointer' }} onClick={() => window.open('https://www.linkedin.com/in/madhav-dhobley-438b8b262/', '_blank')} />
        <FontAwesomeIcon icon={faInstagram} size='2x' style={{ margin: '5px', cursor: 'pointer' }} onClick={() => window.open('https://www.instagram.com/safar.mein.hoon/', '_blank')} />
        <FontAwesomeIcon icon={faTwitter} size='2x' style={{ margin: '5px', cursor: 'pointer' }} onClick={() => window.open('https://twitter.com/d_Madhav27', '_blank')} />
        <FontAwesomeIcon icon={faGithub} size='2x' style={{ margin: '5px', cursor: 'pointer' }} onClick={() => window.open('https://github.com/dMadhav27', '_blank')} />
      </div>
    </div>
  );
}

export default Footer;
