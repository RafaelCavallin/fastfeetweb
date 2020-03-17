import React, { useEffect } from 'react';
import Select from 'react-select/async';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import history from '~/services/history';

import { getRecipientsRequest } from '~/store/modules/recipient/actions';
import { getDeliveyManRequest } from '~/store/modules/deliveryMan/actions';

import { Container, Content, Button } from './styles';

export default function NewOrder() {
  const recipients = useSelector(state => state.recipient.recipients);
  const deliveryMen = useSelector(state => state.deliveryMan.deliverymen);
  const dispatch = useDispatch();

  // Adicionando campos Label e Value no obejto de Recipients.
  const RecipentSelect = recipients.map(recipient => {
    return { ...recipient, label: recipient.name, value: recipient.id };
  });

  // Adicionando campos Label e Value no obejto de DeliveryMen.
  const DeliveryMenSelect = deliveryMen.map(deliveryman => {
    return { ...deliveryman, label: deliveryman.name, value: deliveryman.id };
  });

  useEffect(() => {
    dispatch(getRecipientsRequest());
    dispatch(getDeliveyManRequest());
  }, []);

  const filterDeliveryMan = inputValue => {
    return DeliveryMenSelect.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const deliveryMenOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterDeliveryMan(inputValue));
      }, 1000);
    });

  const filterRecipients = inputValue => {
    return RecipentSelect.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const recipientsOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterRecipients(inputValue));
      }, 1000);
    });

  function handleSubmit(data) {
    console.tron.log(data);
  }

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

            <Button type="submit" form="newOrderForm">
              <MdDone size={25} color="#FFF" />
              <span>CADASTRAR</span>
            </Button>
          </div>
        </header>
        <Form id="newOrderForm" onSubmit={handleSubmit}>
          <div className="line">
            <div className="group">
              <span>Destinatário</span>
              <Select
                name="recipientId"
                cacheOptions
                defaultOptions={false}
                loadOptions={recipientsOptions}
              />
            </div>

            <div className="group">
              <span>Entregador</span>
              <Select
                name="deliveryManId"
                cacheOptions
                defaultOptions={false}
                loadOptions={deliveryMenOptions}
              />
            </div>
          </div>

          <div className="line">
            <div className="group">
              <span>Nome do produto</span>
              <Input
                name="product"
                id="product"
                type="text"
                placeholder="Yamaha XYZ"
              />
            </div>
          </div>
        </Form>
      </Content>
    </Container>
  );
}
