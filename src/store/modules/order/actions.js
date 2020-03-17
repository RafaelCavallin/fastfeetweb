export function getOrdersRequest() {
  return {
    type: '@orders/GET_ORDER_REQUEST',
  };
}

export function getOrdersSuccess(orders) {
  return {
    type: '@orders/GET_ORDERS_SUCCESS',
    payload: { orders },
  };
}

export function createNewOrder(product, recipientId, deliverymanId) {
  return {
    type: '@orders/CREATE_NEW_ORDER',
    payload: { product, recipientId, deliverymanId },
  };
}
