export const showError = (fieldValue, error) => {
  return fieldValue === '' ? error : '';
};
export const setErrorMessage = ({fieldValue, fieldName, callback}) => {
  if (fieldValue === '') {
    callback(`The ${fieldName} field is required`);
  }
};
