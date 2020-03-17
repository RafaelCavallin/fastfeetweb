import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import * as Yup from 'yup';

import AvatarInput from './AvatarInput';

import history from '~/services/history';
import { Container, Content, Button } from './styles';

import { createNewDeliveryman } from '~/store/modules/deliveryMan/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().required('O e-mail é obrigatório'),
  avatar_id: Yup.number().required(),
});

export default function NewDeliveryMan() {
  const dispatch = useDispatch();

  async function handleSubmit({ name, avatar_id, email }) {
    dispatch(createNewDeliveryman(name, avatar_id, email));
  }

  return (
    <Container>
      <Content>
        <header>
          <strong>Cadastro de entregadores</strong>
          <div>
            <Button
              type="button"
              cancel
              onClick={() => history.push('/deliveryman')}
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
        <Form id="newRecipientForm" onSubmit={handleSubmit} schema={schema}>
          <div className="avatar">
            <AvatarInput name="avatar_id" />
          </div>
          <div className="line">
            <div className="group">
              <span>Nome</span>
              <Input name="name" type="text" placeholder="João da Silva" />
            </div>
          </div>
          <div className="line">
            <div className="group">
              <span>Email</span>
              <Input
                name="email"
                type="email"
                placeholder="example@email.com"
              />
            </div>
          </div>
        </Form>
      </Content>
    </Container>
  );
}
