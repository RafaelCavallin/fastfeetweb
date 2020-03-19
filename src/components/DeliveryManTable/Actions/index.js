import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { MdMoreHoriz, MdModeEdit, MdDelete } from 'react-icons/md';

import { deleteDeliveryManRequest } from '~/store/modules/deliveryMan/actions';

import { Container, Badge, ActionList, Options } from './styles';

export default function Actions(props) {
  const dispatch = useDispatch();

  const { deliveryMan } = props;
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handlerDelete(deliveryMan_id) {
    if (window.confirm('Você tem certeza que deseja excluir o registro?')) {
      dispatch(deleteDeliveryManRequest(deliveryMan_id));
    }
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <MdMoreHoriz color="#666" size={25} />
      </Badge>
      <ActionList visible={visible}>
        <Options>
          <button type="button">
            <MdModeEdit color="#4D85EE" size={15} />
            <span>Editar</span>
          </button>
          <button
            type="button"
            onClick={() => {
              handlerDelete(deliveryMan.id);
            }}
          >
            <MdDelete color="#DF4141" size={15} />
            <span>Excluir</span>
          </button>
        </Options>
      </ActionList>
    </Container>
  );
}
Actions.propTypes = {
  deliveryMan: PropTypes.string,
};
Actions.defaultProps = {
  deliveryMan: null,
};
