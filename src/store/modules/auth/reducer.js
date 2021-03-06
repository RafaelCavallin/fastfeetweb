import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        // eslint-disable-next-line no-param-reassign
        draft.loading = true;
        break;
      }

      case '@auth/SIGN_IN_SUCCESS': {
        // eslint-disable-next-line no-param-reassign
        draft.token = action.payload.token;
        // eslint-disable-next-line no-param-reassign
        draft.signed = true;
        // eslint-disable-next-line no-param-reassign
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_FAILURE': {
        // eslint-disable-next-line no-param-reassign
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_OUT': {
        // eslint-disable-next-line no-param-reassign
        draft.token = null;
        // eslint-disable-next-line no-param-reassign
        draft.signed = false;
        break;
      }

      default:
    }
  });
}
