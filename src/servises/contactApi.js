import axios from 'axios';
//enf
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/contacts';

export const getContactsApi = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const removeContactApi = async id =>
  (await axios.delete(`/contacts/${id}`)).data;

export const addContactApi = async ({ name, number }) =>
  (await axios.post('/contacts', { name, number })).data;
