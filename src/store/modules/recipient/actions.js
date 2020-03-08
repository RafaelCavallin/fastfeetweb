export function getRecipientsRequest() {
  return {
    type: '@recipients/GET_RECIPIENT_REQUEST',
  };
}

export function getRecipientsSuccess(recipients) {
  return {
    type: '@recipients/GET_RECIPIENT_SUCCESS',
    payload: { recipients },
  };
}
