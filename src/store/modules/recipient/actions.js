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
