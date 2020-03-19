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

export function deleteRecipientsRequest(recipient_id) {
  return {
    type: '@recipients/DELETE_RECIPIENT_REQUEST',
    payload: { recipient_id },
  };
}

export function deleteRecipientsSuccess() {
  return {
    type: '@recipients/DELETE_RECIPIENT_SUCCESS',
  };
}

export function createNewRecipient(
  name,
  street,
  number,
  complement,
  city,
  state,
  zipcode
) {
  return {
    type: '@recipients/CREATE_NEW_RECIPIENT',
    payload: { name, street, number, complement, city, state, zipcode },
  };
}
