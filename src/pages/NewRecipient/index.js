import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import history from '~/services/history';
import { Container, Content, Button } from './styles';

export default function NewOrder() {
  return (
    <Container>
      <Content>
        <header>
          <strong>Cadastro de destinatários</strong>
          <div>
            <Button
              type="button"
              cancel
              onClick={() => history.push('/recipients')}
            >
              <MdKeyboardArrowLeft size={25} color="#FFF" />
              <span>VOLTAR</span>
            </Button>

            <Button type="button">
              <MdDone size={25} color="#FFF" />
              <span>CADASTRAR</span>
            </Button>
          </div>
        </header>
        <Form>
          <div className="line">
            <div className="group">
              <span>Nome</span>
              <Input
                name="name"
                id="name"
                type="text"
                placeholder="João da Silva"
              />
            </div>
          </div>
          <div className="line">
            <div className="group">
              <span>Rua</span>
              <Input
                name="street"
                id="street"
                type="text"
                placeholder="Av. Assis Brasil"
              />
            </div>
            <div className="group">
              <span>Número</span>
              <Input name="number" id="number" type="text" placeholder="1985" />
            </div>
            <div className="group">
              <span>Complemento</span>
              <Input
                name="complement"
                id="complement"
                type="text"
                placeholder="Casa"
              />
            </div>
          </div>

          <div className="line">
            <div className="group">
              <span>Cidade</span>
              <Input
                name="city"
                id="city"
                type="text"
                placeholder="Porto Alegre"
              />
            </div>
            <div className="group">
              <span>Estado</span>
              <Input
                name="state"
                id="state"
                type="text"
                placeholder="Rio Grande do Sul"
              />
            </div>
            <div className="group">
              <span>CEP</span>
              <Input
                name="zipcode"
                id="zipcode"
                type="text"
                placeholder="96758-223"
              />
            </div>
          </div>
        </Form>
      </Content>
    </Container>
  );
}
