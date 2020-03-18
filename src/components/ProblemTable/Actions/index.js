import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdMoreHoriz, MdModeEdit, MdDelete } from 'react-icons/md';

import Modal from '~/components/UI/Modal/Modal';

import { Container, Badge, ActionList, Options } from './styles';

export default function Actions(props) {
  const { problem } = props;
  const [modalToggle, setModalToggle] = useState(false);
  const [visible, setVisible] = useState(false);

  function modalHandler(e) {
    e.preventDefault();
    setModalToggle(!modalToggle);
  }

  function HandlerDelete(e) {
    e.preventDefault();
    console.tron.log(problem.delivery_id);
  }

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <>
      <Container>
        <Badge onClick={handleToggleVisible}>
          <MdMoreHoriz color="#666" size={25} />
        </Badge>
        <ActionList visible={visible}>
          <Options>
            <button type="button" onClick={modalHandler}>
              <MdModeEdit color="#4D85EE" size={15} />
              <span>Visualizar</span>
            </button>
            <button type="button" onClick={HandlerDelete}>
              <MdDelete color="#DF4141" size={15} />
              <span>Cancelar encomenda</span>
            </button>
          </Options>
        </ActionList>
      </Container>

      <Modal show={modalToggle} modalClosed={modalHandler}>
        <div style={{ color: 'black' }}>{problem.description}</div>
      </Modal>
    </>
  );
}

Actions.propTypes = {
  problem: PropTypes.string,
};
Actions.defaultProps = {
  problem: null,
};
