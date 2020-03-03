import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import logo from '../../assests/logo.png';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/orders">
            <img src={logo} alt="Fast Feet" />
          </Link>
          <Link to="/orders">ENCOMENDAS</Link>
          <Link to="/deliveryman">ENTREGADORES</Link>
          <Link to="/deliveryman">DESTINATÁRIOS</Link>

          <Link to="/deliveryman">PROBLEMAS</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Rafael Cavallin</strong>
              <Link to="/profile">Sair do sistema</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
