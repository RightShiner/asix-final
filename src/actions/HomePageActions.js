import axios from 'axios';

export const FETCH_PUBLICATIONS_REQUEST = 'FETCH_PUBLICATIONS_REQUEST';
export const FETCH_PUBLICATIONS_SUCCESS = 'FETCH_PUBLICATIONS_SUCCESS';
export const FETCH_PUBLICATIONS_FAILED = 'FETCH_PUBLICATIONS_FAILED';

import { API_DOMAIN } from '../helpers/apiCredentials';

export function getPublications() {
  return (dispatch) => {
    dispatch({ type: FETCH_PUBLICATIONS_REQUEST });
    return axios.get(`${API_DOMAIN}/api/publications`)
      .then((response) => {
        dispatch({
          type: FETCH_PUBLICATIONS_SUCCESS,
          payload: response.data.publications,
        });
      })
      .catch((error) => {
        dispatch({ type: FETCH_PUBLICATIONS_FAILED, payload: error });
      });
  };
}
