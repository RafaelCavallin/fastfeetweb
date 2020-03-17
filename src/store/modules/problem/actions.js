export function getProblemsRequest() {
  return {
    type: '@problems/GET_PROBLEM_REQUEST',
  };
}

export function getProblemsSuccess(problems) {
  return {
    type: '@problems/GET_PROBLEM_SUCCESS',
    payload: { problems },
  };
}
