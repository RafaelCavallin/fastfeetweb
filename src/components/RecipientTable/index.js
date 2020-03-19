import React from 'react';
import PropTypes from 'prop-types';

import Actions from './Actions';

import { TR } from './styles';

export default function RecipientTable(props) {
  const { recipient } = props;
  return (
    <TR>
      <td>#{recipient.id}</td>
      <td>{recipient.name}</td>
      <td>{recipient.street}</td>
      <td>
        <Actions recipient={recipient} />
      </td>
    </TR>
  );
}

RecipientTable.propTypes = {
  recipient: PropTypes.string,
};
RecipientTable.defaultProps = {
  recipient: null,
};
