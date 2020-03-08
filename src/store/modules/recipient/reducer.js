import produce from 'immer';

const INITIAL_STATE = {
  recipients: [],
};

export default function recipients(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@recipients/GET_RECIPIENT_REQUEST': {
        break;
      }

      case '@recipients/GET_RECIPIENT_SUCCESS': {
        // eslint-disable-next-line no-param-reassign
        draft.recipients = action.payload.recipients;
        break;
      }

      default:
    }
  });
}
