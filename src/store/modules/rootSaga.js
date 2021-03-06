import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import order from './order/sagas';
import recipient from './recipient/sagas';
import deliveryMan from './deliveryMan/sagas';
import problem from './problem/sagas';

export default function* rootSaga() {
  return yield all([auth, user, order, recipient, deliveryMan, problem]);
}
