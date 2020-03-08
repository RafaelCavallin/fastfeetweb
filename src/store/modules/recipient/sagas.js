import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { getRecipientsSuccess } from './actions';

export function* getAllRecipients() {
  try {
    const response = yield call(api.get, 'recipients', { params: { q: '' } });
    yield put(getRecipientsSuccess(response.data));
  } catch (error) {
    toast.error('Failed to load recipients');
  }
}

export default all([
  takeLatest('@recipients/GET_RECIPIENT_REQUEST', getAllRecipients),
]);
