import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import logo from '../../assests/logo.png';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Meetup" />
          </Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Rafael Cavallin</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <button type="button">Sair</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
