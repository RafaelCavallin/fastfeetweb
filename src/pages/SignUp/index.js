import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

export default function SignUp() {
  return (
    <Form>
      <Input name="name" placeholder="Nome completo" />
      <Input name="email" type="email" placeholder="Digite seu Email" />
      <Input name="password" type="password" placeholder="Sua senha secreta" />

      <button type="submit">Criar conta</button>
      <Link to="/">Já tenho login</Link>
    </Form>
  );
}
