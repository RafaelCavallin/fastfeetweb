import React from 'react';
import PropTypes from 'prop-types';

import Actions from './Actions';

import { TR } from './styles';

export default function DeliveryManTable(props) {
  const { deliveryMan } = props;
  return (
    <TR>
      <td>#{deliveryMan.id}</td>
      <td>
        <img src={deliveryMan.avatar.url} alt="avatar" />
      </td>
      <td>{deliveryMan.name}</td>
      <td>{deliveryMan.email}</td>
      <td>
        <Actions />
      </td>
    </TR>
  );
}

DeliveryManTable.propTypes = {
  deliveryMan: PropTypes.string,
};
DeliveryManTable.defaultProps = {
  deliveryMan: null,
};
