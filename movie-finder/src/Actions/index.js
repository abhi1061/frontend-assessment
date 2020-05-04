import axios from 'axios';

import { API_KEY } from './constants';

export const getTrending = async (page) => {
  const res = await axios.get(
    `/trending/all/week?api_key=${API_KEY}&page=${page}`,
  );
  if (res.status === 200) {
    return res.data;
  }
};
