import { GET } from '../config/constants';
import request from'../helpers/request';
import { REACT_APP_ITEMS_URL, REACT_APP_TIMEOUT } from'../config/environment';

const getItemByQuery = async ({ query, limit = 4 }) => {
  const response = await request({
    method: GET,
    url: `${REACT_APP_ITEMS_URL}/api/items`,
    timeout: REACT_APP_TIMEOUT,
    params: { q: query, limit },
  });

  return response.data;
};

const getItemById = async itemId => {
  const response = await request({
    method: GET,
    url: `${REACT_APP_ITEMS_URL}/api/items/${itemId}`,
    timeout: REACT_APP_TIMEOUT,
  });

  return response.data;
};

export { getItemByQuery, getItemById };
