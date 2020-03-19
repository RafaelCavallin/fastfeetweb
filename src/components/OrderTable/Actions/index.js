import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  MdMoreHoriz,
  MdVisibility,
  MdModeEdit,
  MdDelete,
} from 'react-icons/md';

import Modal from '~/components/UI/Modal/Modal';

import { Container, Badge, ActionList, Options } from './styles';

export default function Actions(props) {
  const { order } = props;
  const [visible, setVisible] = useState(false);
  const [modalToggle, setModalToggle] = useState(false);

  function modalHandler(e) {
    e.preventDefault();
    setModalToggle(!modalToggle);
  }

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <MdMoreHoriz color="#666" size={25} />
      </Badge>
      <ActionList visible={visible}>
        <Options>
          <button type="button" onClick={modalHandler}>
            <MdVisibility color="#7D40E7" size={15} />
            <span>Visualizar</span>
          </button>
          <button type="button">
            <MdModeEdit color="#4D85EE" size={15} />
            <span>Editar</span>
          </button>
          <button type="button">
            <MdDelete color="#DF4141" size={15} />
            <span>Excluir</span>
          </button>
        </Options>
      </ActionList>

      <Modal show={modalToggle} modalClosed={modalHandler}>
        <div style={{ color: 'black' }}>
          <div className="info">
            <strong>Informações da encomenda</strong>
            <p>
              {order.recipient.street}, {order.recipient.number}
            </p>
            <p>
              {order.recipient.city} - {order.recipient.state}
            </p>
            <p>{order.recipient.zip_code}</p>
          </div>
          <div className="date">
            <strong>Datas</strong>
            <p>Retirada: {order.start_date || 'Pendente'}</p>
            <p>Entrega: {order.end_date || 'Pendente'}</p>
          </div>
          <div className="signature">
            <strong>Assinatura do destinatário</strong>
            <img
              src="https://api.adorable.io/avatars/120/abott@adorable.png"
              alt="Assinatura"
            />
          </div>
        </div>
      </Modal>
    </Container>
  );
}

Actions.propTypes = {
  order: PropTypes.string,
};
Actions.defaultProps = {
  order: null,
};
