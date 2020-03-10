import React from 'react';
import PropTypes from 'prop-types';

import Actions from './Actions';

import { TR } from './styles';

export default function OrderTable(props) {
  const { order } = props;
  return (
    <TR>
      <td>#{order.id}</td>
      <td>{order.recipient.name}</td>
      <td>{order.deliveryman.name}</td>
      <td>{order.recipient.city}</td>
      <td>{order.recipient.state}</td>
      <td>Pendente</td>
      <td>
        <Actions />
      </td>
    </TR>
  );
}

OrderTable.propTypes = {
  order: PropTypes.string,
};
OrderTable.defaultProps = {
  order: null,
};
