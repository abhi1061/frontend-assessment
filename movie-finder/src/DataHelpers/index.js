import { mapData } from './MapData';
import { getSearchResult } from '../Actions';

export const fetchData = async (query, page, isFetching, setState) => {
  if (query === '') {
    return;
  }
  let response = await getSearchResult(query, page);
  if (isFetching) {
    setState((prevState) => [...prevState, ...mapData(response.results)]);
  } else {
    setState(mapData(response.results));
  }
};
