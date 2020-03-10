import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { getDeliveyManSuccess } from './actions';

export function* getAllDeliveryMen() {
  try {
    const response = yield call(api.get, 'deliveryman', { params: { q: '' } });
    yield put(getDeliveyManSuccess(response.data));
  } catch (error) {
    toast.error('Failed to load deliverymen');
  }
}

export default all([
  takeLatest('@deliveryMan/GET_DELIVERYMAN_REQUEST', getAllDeliveryMen),
]);
