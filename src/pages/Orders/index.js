import React from 'react';

import { Container } from './styles';

export default function Orders() {
  return (
    <Container>
      <header>Gerenciando encomendas</header>
      <div>
        <input type="text" name="search" />
        <button type="button">+ Cadastrar</button>
      </div>
      <div>
        <table>
          <tr>
            <td>ID</td>
            <td>Destinatário</td>
            <td>Entregador</td>
            <td>Cidade</td>
            <td>Estado</td>
            <td>Status</td>
            <td>Ações</td>
          </tr>
          <tr>
            <td>123</td>
            <td>Rafael Cavallin</td>
            <td>Julia cavallin</td>
            <td>Tapes</td>
            <td>Rio Grande do Sul</td>
            <td>Pendente</td>
            <td> ... </td>
          </tr>
        </table>
      </div>
    </Container>
  );
}
