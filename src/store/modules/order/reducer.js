import produce from 'immer';

const INITIAL_STATE = {
  orders: [],
};

export default function orders(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@orders/GET_ORDER_REQUEST': {
        break;
      }

      case '@orders/GET_ORDERS_SUCCESS': {
        // eslint-disable-next-line no-param-reassign
        draft.orders = action.payload.orders;
        break;
      }

      default:
    }
  });
}
