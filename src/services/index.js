import axios from 'axios';

export const fetchResources = async () => {
  try {
    const { data } = await axios.get('/api/resources');
    return data;
  } catch (error) {
    console.log(error);
  }
};
