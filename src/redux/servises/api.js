import axios from 'axios';
//enf
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/contacts';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getContactsApi = async token => {
  console.log(token);
  setAuthHeader(token);
  //   console.log(selectToken);
  return (await axios.get('/contacts')).data;
};

export const removeContactApi = async id =>
  (await axios.delete(`/contacts/${id}`)).data;

export const addContactApi = async ({ name, number }) => {
  //   console.log(newContacts);
  //   console.log(token);
  //   setAuthHeader(token);

  return (await axios.post('/contacts', { name, number })).data;
};
