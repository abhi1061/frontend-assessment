import axios from 'axios';

import { API_KEY, API_ENDPOINT } from './constants';

export const getSearchResult = async (query, page) => {
  const res = await axios.get(
    `${API_ENDPOINT}?api_key=${API_KEY}&page=${page}&query=${query}`,
  );
  if (res.status === 200) {
    return res.data;
  }
};
