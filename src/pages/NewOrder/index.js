import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import history from '~/services/history';

import { Container, Content, Title } from './styles';

export default function NewOrder() {
  return (
    <Container>
      <Content>
        <header>
          <Title>Cadastro de encomendas</Title>
          <div>
            <button type="button" onClick={() => history.push('/order')}>
              <MdKeyboardArrowLeft size={25} color="#FFF" />
              <span>CADASTRAR</span>
            </button>

            <button type="button" onClick={() => history.push('/neworder')}>
              <MdDone size={25} color="#FFF" />
              <span>CADASTRAR</span>
            </button>
          </div>
        </header>
        <div>
          <Form>
            <div>
              <strong>Destinatário</strong>
              <Input
                name="recipient"
                id="recipient"
                type="text"
                placeholder="Camila Cavallin"
              />
              <strong>Entregador</strong>
              <Input
                name="deliveryman"
                id="deliveryman"
                type="text"
                placeholder="Julia Cavallin"
              />
            </div>
            <strong>Nome do produto</strong>
            <Input
              name="product"
              id="email"
              type="email"
              placeholder="Yamaha XYZ"
            />
          </Form>
        </div>
      </Content>
    </Container>
  );
}
