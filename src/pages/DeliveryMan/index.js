import React, { useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import history from '~/services/history';

import DeliveryManTable from '~/components/DeliveryManTable';

import { getDeliveyManRequest } from '~/store/modules/deliveryMan/actions';

import { Container, Content, Table } from './styles';

export default function Orders() {
  const deliveryMen = useSelector(state => state.deliveryMan.deliverymen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDeliveyManRequest());
  }, []);

  return (
    <Container>
      <Content>
        <header>Gerenciando entregadores</header>
        <div className="search">
          <Form>
            <Input
              name="search"
              id="search"
              type="text"
              placeholder="Buscar por entregadores"
            />
          </Form>
          <button type="button" onClick={() => history.push('/newdeliveryman')}>
            <MdAddCircleOutline size={25} color="#FFF" />
            <span>CADASTRAR</span>
          </button>
        </div>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Foto</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {deliveryMen.map(deliveryMan => (
              <DeliveryManTable
                ey={String(deliveryMan.id)}
                deliveryMan={deliveryMan}
              />
            ))}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}
