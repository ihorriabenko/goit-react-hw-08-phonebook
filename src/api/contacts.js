import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://62d05fb21cc14f8c08898d14.mockapi.io/api/v1/',
})

export const getContacts = async () => {
  const {data} = await instance.get('/contacts');
  return data;
}

export const deleteContact = async (id) => {
  const {data} = await instance.delete(`/contacts/${id}`);
  return data;
}

export const addContact = async (newUser) => {
  const {data} = await instance.post('/contacts', newUser);
  return data;
}
