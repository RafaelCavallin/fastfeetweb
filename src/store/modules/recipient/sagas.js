import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { getRecipientsSuccess } from './actions';

export function* getAllRecipients() {
  try {
    const response = yield call(api.get, 'recipients', { params: { q: '' } });
    yield put(getRecipientsSuccess(response.data));
  } catch (error) {
    toast.error('Failed to load recipients');
  }
}

export function* createNewRecipient({ payload }) {
  try {
    const { name, street, number, complement, city, state, zipcode } = payload;

    yield call(api.post, 'recipients', {
      name,
      street,
      number,
      complement,
      city,
      state,
      zip_code: zipcode,
    });

    history.push('/recipients');
  } catch (err) {
    toast.error('Falha ao cadastrar. Verifique seus dados');
  }
}

export default all([
  takeLatest('@recipients/GET_RECIPIENT_REQUEST', getAllRecipients),
  takeLatest('@recipients/CREATE_NEW_RECIPIENT', createNewRecipient),
]);
