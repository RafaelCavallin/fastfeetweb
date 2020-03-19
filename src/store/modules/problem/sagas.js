import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { getProblemsSuccess } from './actions';

export function* getAllproblems() {
  try {
    const response = yield call(api.get, 'deliveries/problems');
    yield put(getProblemsSuccess(response.data));
  } catch (error) {
    toast.error('Falha ao carregar problemas');
  }
}

export function* deleteOrderByProblems({ payload }) {
  const { deliveryId } = payload;
  try {
    yield call(api.delete, `/problem/${deliveryId}/cancel-delivery`);
    toast.success('Pedido cancelado com sucesso!');
  } catch (err) {
    toast.error('Falha ao cancelar o pedido.');
    console.tron.log(err);
  }
}

export default all([
  takeLatest('@problems/GET_PROBLEM_REQUEST', getAllproblems),
  takeLatest('@problems/DELETE_ORDER_BY_PROBLEM', deleteOrderByProblems),
]);
