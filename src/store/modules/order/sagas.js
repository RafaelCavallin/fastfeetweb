import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { getOrdersSuccess } from './actions';

export function* getAllOrders() {
  try {
    const response = yield call(api.get, 'orders', { params: { q: '' } });
    yield put(getOrdersSuccess(response.data));
  } catch (error) {
    toast.error('Failed to load orders');
  }
}

export default all([takeLatest('@orders/GET_ORDER_REQUEST', getAllOrders)]);
