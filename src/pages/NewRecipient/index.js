import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import * as Yup from 'yup';

import history from '~/services/history';
import { Container, Content, Button } from './styles';

import { createNewRecipient } from '~/store/modules/recipient/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  street: Yup.string().required('A rua é obrigatória'),
  number: Yup.string().required('O número é obrigatório'),
  complement: Yup.string(),
  city: Yup.string().required('A cidade é obrigatória'),
  state: Yup.string()
    .max(2, 'Utilize abreviatura (SP, RS, PA...)')
    .required('O estado é obrigatório'),
  zipcode: Yup.string().required('O CEP é obrigatório'),
});

export default function NewOrder() {
  const dispatch = useDispatch();

  function handleSubmit({
    name,
    street,
    number,
    complement,
    city,
    state,
    zipcode,
  }) {
    dispatch(
      createNewRecipient(name, street, number, complement, city, state, zipcode)
    );
  }

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

            <Button type="submit" form="newRecipientForm">
              <MdDone size={25} color="#FFF" />
              <span>CADASTRAR</span>
            </Button>
          </div>
        </header>
        <Form id="newRecipientForm" schema={schema} onSubmit={handleSubmit}>
          <div className="line">
            <div className="group">
              <span>Nome</span>
              <Input name="name" type="text" placeholder="João da Silva" />
            </div>
          </div>
          <div className="line">
            <div className="group">
              <span>Rua</span>
              <Input name="street" type="text" placeholder="Av. Assis Brasil" />
            </div>
            <div className="group">
              <span>Número</span>
              <Input name="number" type="text" placeholder="1985" />
            </div>
            <div className="group">
              <span>Complemento</span>
              <Input name="complement" type="text" placeholder="Casa" />
            </div>
          </div>

          <div className="line">
            <div className="group">
              <span>Cidade</span>
              <Input name="city" type="text" placeholder="Porto Alegre" />
            </div>
            <div className="group">
              <span>Estado</span>
              <Input name="state" type="text" placeholder="Rio Grande do Sul" />
            </div>
            <div className="group">
              <span>CEP</span>
              <Input name="zipcode" type="text" placeholder="96758-223" />
            </div>
          </div>
        </Form>
      </Content>
    </Container>
  );
}
