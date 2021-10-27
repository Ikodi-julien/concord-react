import React from 'react';
// import {Link} from 'react-router-dom';

import './footer.scss';

const Footer = ({dbDate}) => (
  <section className="footer">
    <a className='footer__link' href='https://ikodi.eu/blog/?page_id=36'>
    Contact
    <div className='footer__contact' />
    </a>
    <p>Mise à jour des données: {dbDate}</p>
  </section>
)

export default Footer;
