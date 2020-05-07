import { createData } from './MapData';
import { getSearchResult } from '../Actions';

export const fetchData = async (query, page, isFetching, setState) => {
  if (query === '') {
    return;
  }
  let response = await getSearchResult(query, page);
  if (isFetching) {
    setState((prevState) => [...prevState, ...createData(response.results)]);
  } else {
    setState(createData(response.results));
  }
};
