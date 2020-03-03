import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Orders from '../pages/Orders';
import DeliveryMan from '../pages/DeliveryMan';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/orders" component={Orders} isPrivate />
      <Route path="/deliveryman" component={DeliveryMan} isPrivate />
    </Switch>
  );
}
