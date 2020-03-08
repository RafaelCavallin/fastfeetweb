import React, { useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import history from '~/services/history';

import { getRecipientsRequest } from '~/store/modules/recipient/actions';

import { Container, Content, Button } from './styles';

export default function NewOrder() {
  const recipients = useSelector(state => state.recipient.recipients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipientsRequest());
  }, []);

  const filterDeliveryMan = inputValue => {
    return recipients.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterDeliveryMan(inputValue));
      }, 1000);
    });

  function handleForm() {}

  return (
    <Container>
      <Content>
        <header>
          <strong>Cadastro de encomendas</strong>
          <div>
            <Button
              type="button"
              cancel
              onClick={() => history.push('/orders')}
            >
              <MdKeyboardArrowLeft size={25} color="#FFF" />
              <span>VOLTAR</span>
            </Button>

            <Button
              type="button"
              onClick={() => {
                handleForm();
              }}
            >
              <MdDone size={25} color="#FFF" />
              <span>CADASTRAR</span>
            </Button>
          </div>
        </header>
        <Form>
          <AsyncSelect
            cacheOptions
            defaultOptions
            loadOptions={promiseOptions}
          />
          <div className="line">
            <div className="group">
              <span>Destinatário</span>
              <Input
                name="recipient"
                id="recipient"
                type="text"
                placeholder="João da Silva"
              />
            </div>

            <div className="group">
              <span>Entregador</span>
              <Input
                name="deliveryman"
                id="deliveryman"
                type="text"
                placeholder="Jorge da Silva"
              />
            </div>
          </div>

          <div className="line">
            <div className="group">
              <span>Nome do produto</span>
              <Input
                name="product"
                id="email"
                type="email"
                placeholder="Yamaha XYZ"
              />
            </div>
          </div>
        </Form>
      </Content>
    </Container>
  );
}
