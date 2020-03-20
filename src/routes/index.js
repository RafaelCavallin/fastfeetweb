import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Orders from '../pages/Orders';
import DeliveryMan from '../pages/DeliveryMan';
import NewOrder from '../pages/NewOrder';
import Recipient from '../pages/Recipient';
import NewRecipient from '../pages/NewRecipient';
import Problem from '../pages/Problem';
import NewDeliveryman from '../pages/NewDeliveryman';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/orders" component={Orders} isPrivate />
      <Route path="/deliveryman" component={DeliveryMan} isPrivate />
      <Route path="/neworder" component={NewOrder} isPrivate />
      <Route path="/recipients" component={Recipient} isPrivate />
      <Route path="/newrecipient" component={NewRecipient} isPrivate />
      <Route path="/problems" component={Problem} isPrivate />
      <Route path="/newdeliveryman" component={NewDeliveryman} isPrivate />

      <Route
        path="/editrecipient/:id"
        exact
        component={NewRecipient}
        isPrivate
      />
    </Switch>
  );
}
