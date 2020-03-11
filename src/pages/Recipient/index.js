import React, { useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import history from '~/services/history';

import RecipientTable from '~/components/RecipientTable';

import { getRecipientsRequest } from '~/store/modules/recipient/actions';

import { Container, Content, Table } from './styles';

export default function Orders() {
  const recipients = useSelector(state => state.recipient.recipients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipientsRequest());
  }, []);

  return (
    <Container>
      <Content>
        <header>Gerenciando destinatários</header>
        <div className="search">
          <Form>
            <Input
              name="search"
              id="search"
              type="text"
              placeholder="Buscar por destinatário"
            />
          </Form>
          <button type="button" onClick={() => history.push('/newrecipient')}>
            <MdAddCircleOutline size={25} color="#FFF" />
            <span>CADASTRAR</span>
          </button>
        </div>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
          </thead>
          {recipients.map(recipient => (
            <RecipientTable key={String(recipient.id)} recipient={recipient} />
          ))}
          <tbody />
        </Table>
      </Content>
    </Container>
  );
}
