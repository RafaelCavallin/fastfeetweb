export function getDeliveyManRequest() {
  return {
    type: '@deliveryMan/GET_DELIVERYMAN_REQUEST',
  };
}

export function getDeliveyManSuccess(deliveryMen) {
  return {
    type: '@deliveryMan/GET_DELIVERYMAN_SUCCESS',
    payload: { deliveryMen },
  };
}
