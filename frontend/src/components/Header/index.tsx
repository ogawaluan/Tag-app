import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style';
import logoImg from '../../assets/images/logo.svg';

const Header: React.FC = () => {
  const currentLocation = window.location.pathname;

  return (
    <Container>
      <img src={logoImg} alt="Logo" />

      <nav>
        <a
          data-testid="linkTag"
          href="https://site.taglivros.com"
          target="_blank"
          rel="noreferrer"
        >
          TAG
        </a>

        {currentLocation === '/' ? null : (
          <Link data-testid="link2" to="/">
            Home
          </Link>
        )}
      </nav>
    </Container>
  );
};

export default Header;
