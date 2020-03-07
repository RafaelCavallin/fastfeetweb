import React, { useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import history from '~/services/history';

import LineTable from '~/components/LineTable';

import { getOrdersRequest } from '~/store/modules/order/actions';

import { Container, Content } from './styles';

export default function Orders() {
  const orders = useSelector(state => state.order.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersRequest());
  }, []);

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
          <button type="button" onClick={() => history.push('/neworder')}>
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
            {orders.map(order => (
              <LineTable key={order.id} order={order} />
            ))}
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
