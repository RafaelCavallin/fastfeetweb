import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { getRecipientsSuccess, deleteRecipientsSuccess } from './actions';

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
    const { name, street, number, complement, city, state, zip_code } = payload;
    yield call(api.post, 'recipients', {
      name,
      street,
      number,
      complement,
      city,
      state,
      zip_code,
    });

    toast.success('Destinatário cadastrado com sucesso.');
    history.push('/recipients');
  } catch (err) {
    toast.error('Falha ao cadastrar. Verifique seus dados');
  }
}

export function* deleteRecipient({ payload }) {
  const { recipient_id } = payload;
  try {
    yield call(api.delete, `recipients/${recipient_id}`);
    toast.success('Destinatário excluído.');

    yield put(deleteRecipientsSuccess());
  } catch (err) {
    toast.error('Falha ao excluir o registro.');
  }
}

export function* updateRecipient({ payload }) {
  const {
    id,
    name,
    street,
    number,
    complement,
    city,
    state,
    zip_code,
  } = payload;

  try {
    yield call(api.put, `recipients/${id}`, {
      name,
      street,
      number,
      complement,
      city,
      state,
      zip_code,
    });
    toast.success('Destinatário alterado.');
    yield put(deleteRecipientsSuccess());
    history.push('/recipients');
  } catch (err) {
    toast.error('Falha ao alterar o registro.');
  }
}

export default all([
  takeLatest('@recipients/GET_RECIPIENT_REQUEST', getAllRecipients),
  takeLatest('@recipients/CREATE_NEW_RECIPIENT', createNewRecipient),
  takeLatest('@recipients/DELETE_RECIPIENT_REQUEST', deleteRecipient),
  takeLatest('@recipients/UPDATE_RECIPIENT_REQUEST', updateRecipient),
]);
