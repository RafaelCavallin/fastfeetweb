import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assests/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email pe obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="FastFeet" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <strong>SEU EMAIL</strong>
        <Input
          name="email"
          id="email"
          type="email"
          placeholder="exemplo@email.com"
        />

        <strong>SUA SENHA</strong>
        <Input
          name="password"
          type="password"
          id="password"
          placeholder="*******"
        />

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
