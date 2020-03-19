import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdMoreHoriz, MdModeEdit, MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';

import { deleteRecipientsRequest } from '~/store/modules/recipient/actions';

import { Container, Badge, ActionList, Options } from './styles';

export default function Actions(props) {
  const dispatch = useDispatch();

  const { recipient } = props;
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleDelete(recipient_id) {
    if (window.confirm('Você tem certeza que deseja exluir o registro?')) {
      dispatch(deleteRecipientsRequest(recipient_id));
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
              handleDelete(recipient.id);
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
  recipient: PropTypes.string,
};
Actions.defaultProps = {
  recipient: null,
};
