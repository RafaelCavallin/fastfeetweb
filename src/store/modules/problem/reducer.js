import produce from 'immer';

const INITIAL_STATE = {
  problems: [],
};

export default function problems(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@problems/GET_PROBLEM_REQUEST': {
        break;
      }

      case '@problems/GET_PROBLEM_SUCCESS': {
        // eslint-disable-next-line no-param-reassign
        draft.problems = action.payload.problems;
        break;
      }

      default:
    }
  });
}
