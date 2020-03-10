import produce from 'immer';

const INITIAL_STATE = {
  deliverymen: [],
};

export default function deliverymen(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@deliveryMan/GET_DELIVERYMAN_REQUEST': {
        break;
      }

      case '@deliveryMan/GET_DELIVERYMAN_SUCCESS': {
        // eslint-disable-next-line no-param-reassign
        draft.deliverymen = action.payload.deliveryMen;
        break;
      }

      default:
    }
  });
}
