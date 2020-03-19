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

export function deleteOrderByProblems(deliveryId) {
  return {
    type: '@problems/DELETE_ORDER_BY_PROBLEM',
    payload: { deliveryId },
  };
}
