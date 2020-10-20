import axios from 'axios';

export const fetchResources = async () => {
  try {
    const { data } = await axios.get('/api/resources');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateResource = async (id, resource) => {
  try {
    const { data } = await axios.patch(`/api/resources/${id}`, resource);
    return data;
  } catch (error) {
    console.log(error);
  }
};
