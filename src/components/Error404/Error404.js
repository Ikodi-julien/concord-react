import React from 'react';
import NavbarContainer from 'src/containers/NavbarContainer';
import './error404.scss';

const Error404 = () => (
  <section className="error">
    <NavbarContainer />
    <h1 className="error__title">Ça marche paaaas !!!</h1>
  </section>
)

export default Error404;
