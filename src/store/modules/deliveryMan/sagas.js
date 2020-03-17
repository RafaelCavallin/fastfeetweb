import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { getDeliveyManSuccess } from './actions';

export function* getAllDeliveryMen() {
  try {
    const response = yield call(api.get, 'deliveryman', { params: { q: '' } });
    yield put(getDeliveyManSuccess(response.data));
  } catch (err) {
    toast.error('Failed to load deliverymen');
  }
}

export function* createNewDeliveryMen({ payload }) {
  try {
    const { name, avatarId, email } = payload;

    yield call(api.post, 'deliveryman', {
      name,
      avatar_id: avatarId,
      email,
    });

    history.push('/deliveryman');
  } catch (err) {
    toast.error('Falha ao cadastrar. Verifique seus dados');
  }
}

export default all([
  takeLatest('@deliveryMan/GET_DELIVERYMAN_REQUEST', getAllDeliveryMen),
  takeLatest('@deliveryMan/CREATE_NEW_DELIVERYMAN', createNewDeliveryMen),
]);
