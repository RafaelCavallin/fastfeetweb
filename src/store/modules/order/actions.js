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
