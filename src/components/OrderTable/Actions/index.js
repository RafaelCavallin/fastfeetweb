import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdMoreHoriz,
  MdVisibility,
  MdModeEdit,
  MdDelete,
} from 'react-icons/md';

import { Container, Badge, ActionList, Options } from './styles';

export default function Actions() {
  const [visible, setVisible] = useState(false);

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
          <Link to="/view">
            <MdVisibility color="#7D40E7" size={15} />
            <span>Visualizar</span>
          </Link>
          <Link to="/view">
            <MdModeEdit color="#4D85EE" size={15} />
            <span>Editar</span>
          </Link>
          <Link to="/view">
            <MdDelete color="#DF4141" size={15} />
            <span>Excluir</span>
          </Link>
        </Options>
      </ActionList>
    </Container>
  );
}
