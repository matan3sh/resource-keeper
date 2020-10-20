import axios from 'axios';

export const fetchResources = async () => {
  const { data } = await axios.get('/api/resources');
  return data;
};
