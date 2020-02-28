import React from 'react';

import logo from '~/assests/logo.png';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="FastFeet" />
      <form>
        <strong>SEU EMAIL</strong>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="exemplo@email.com"
        />

        <strong>SUA SENHA</strong>
        <input
          name="password"
          type="password"
          id="password"
          placeholder="*******"
        />

        <button type="submit">Entrar no sistema</button>
      </form>
    </>
  );
}
