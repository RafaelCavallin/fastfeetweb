import React from 'react';

import { Container, Content, Table } from './styles';

export default function Problem() {
  return (
    <Container>
      <Content>
        <header>Gerenciando encomendas</header>
        <Table>
          <thead>
            <tr>
              <th>Encomenda</th>
              <th>Problema</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#123</td>
              <td>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                corrupti iure inventore, cumque atque sed eius voluptate
                incidunt velit aut?
              </td>
              <td>...</td>
            </tr>
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}
