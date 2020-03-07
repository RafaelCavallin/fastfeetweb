import React from 'react';
import PropTypes from 'prop-types';

import Actions from '~/components/Actions';

import { TR } from './styles';

export default function LineTable(props) {
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

LineTable.propTypes = {
  order: PropTypes.string,
};
LineTable.defaultProps = {
  order: null,
};
