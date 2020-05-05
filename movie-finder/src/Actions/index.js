import axios from 'axios';

import { API_KEY, API_ENDPOINT } from './constants';

export const getSearchResult = async (query, page) => {
  const res = await axios.get(
    `${API_ENDPOINT}/search/multi?api_key=${API_KEY}&page=${page}&query=${query}&append_to_response=videos`,
  );
  if (res.status === 200) {
    return res.data;
  }
};

export const getTrailer = async (id, mediaType) => {
  const res = await axios.get(
    `${API_ENDPOINT}/${mediaType}/${id}/videos?api_key=${API_KEY}`,
  );
  if (res.status === 200) {
    return res.data;
  }
};
