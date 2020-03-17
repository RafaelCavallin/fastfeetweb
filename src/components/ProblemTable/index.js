import React from 'react';
import PropTypes from 'prop-types';

import Actions from './Actions';

import { TR } from './styles';

export default function ProblemTable(props) {
  const { problem } = props;
  return (
    <TR>
      <td>#{problem.delivery_id}</td>
      <td>{problem.description}</td>
      <td>
        <Actions order={problem} />
      </td>
    </TR>
  );
}

ProblemTable.propTypes = {
  problem: PropTypes.string,
};
ProblemTable.defaultProps = {
  problem: null,
};
