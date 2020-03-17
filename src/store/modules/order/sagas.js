import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { getOrdersSuccess } from './actions';

export function* getAllOrders() {
  try {
    const response = yield call(api.get, 'orders', { params: { q: '' } });
    yield put(getOrdersSuccess(response.data));
  } catch (error) {
    toast.error('Failed to load orders');
  }
}

export function* createNewOrder({ payload }) {
  try {
    const { product, recipientId, deliverymanId } = payload;

    yield call(api.post, 'orders', {
      product,
      recipientId,
      deliverymanId,
    });

    history.push('/orders');
  } catch (err) {
    toast.error('Falha ao cadastrar! Verifique seus dados.');
  }
}

export default all([
  takeLatest('@orders/GET_ORDER_REQUEST', getAllOrders),
  takeLatest('@orders/CREATE_NEW_ORDER', createNewOrder),
]);
