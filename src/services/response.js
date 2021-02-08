const statusResponse = (obj, type, description) => {
  const response = JSON.parse(JSON.stringify(obj.response));
  return !response
    ? 'Server unavailable, try later'
    : verifyStatusResponse(response, type, description);
};
const verifyStatusResponse = (response, type, description) => {
  const statusHttp = {
    401: () => 'Incorrect email or password',
    default: () => 'Error on request',
  };
  return (statusHttp[response.status] || statusHttp.default)();
};
export {statusResponse};
