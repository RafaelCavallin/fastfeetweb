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

export default all([
  takeLatest('@problems/GET_PROBLEM_REQUEST', getAllproblems),
]);
