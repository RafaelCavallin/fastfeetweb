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

export function createNewDeliveryman(name, avatarId, email) {
  return {
    type: '@deliveryMan/CREATE_NEW_DELIVERYMAN',
    payload: { name, avatarId, email },
  };
}
