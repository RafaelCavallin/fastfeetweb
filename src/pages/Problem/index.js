import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProblemsRequest } from '~/store/modules/problem/actions';

import ProblemTable from '~/components/ProblemTable';

import { Container, Content, Table } from './styles';

export default function Problem() {
  const problems = useSelector(state => state.problem.problems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProblemsRequest());
  }, []);
  console.tron.log(problems);
  return (
    <Container>
      <Content>
        <header>Gerenciando encomendas</header>
        <Table>
          <thead>
            <tr>
              <th>Encomenda</th>
              <th>Problema</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {problems.map(problem => (
              <ProblemTable key={String(problem.id)} problem={problem} />
            ))}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}
