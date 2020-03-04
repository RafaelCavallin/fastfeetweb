import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import Actions from '~/components/Actions';

import { Container, Content } from './styles';

export default function Orders() {
  return (
    <Container>
      <Content>
        <header>Gerenciando encomendas</header>
        <div className="search">
          <Form>
            <Input
              name="search"
              id="search"
              type="text"
              placeholder="Buscar por encomenda"
            />
          </Form>
          <button type="button">
            <MdAddCircleOutline size={25} color="#FFF" />
            <span>CADASTRAR</span>
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Destinatário</th>
              <th>Entregador</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr className="line">
              <td>123</td>
              <td>Rafael Cavallin</td>
              <td>Julia cavallin</td>
              <td>Tapes</td>
              <td>Rio Grande do Sul</td>
              <td>Pendente</td>
              <td>
                <Actions />
              </td>
            </tr>
            <tr className="line">
              <td>123</td>
              <td>Rafael Cavallin</td>
              <td>Julia cavallin</td>
              <td>Tapes</td>
              <td>Rio Grande do Sul</td>
              <td>Pendente</td>
              <td>...</td>
            </tr>
            <tr className="line">
              <td>123</td>
              <td>Rafael Cavallin</td>
              <td>Julia cavallin</td>
              <td>Tapes</td>
              <td>Rio Grande do Sul</td>
              <td>Pendente</td>
              <td> ... </td>
            </tr>
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
