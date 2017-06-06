import axios from 'axios';
import { API_DOMAIN } from '../helpers/apiCredentials';
import store from 'store';
import { notificationAdd } from './NotificationActions';
import { hashHistory } from 'react-router';
import * as types from '../actions/action-types';

export const SET_TITLE = 'SET_TITLE';
export const SET_DESCRIPTION = 'SET_DESCRIPTION';
export const PUBLICATION_CREATE_SUCCESS = 'PUBLICATION_CREATE_SUCCESS';
export const PUBLICATION_CREATE_FAILED = 'PUBLICATION_CREATE_FAILED';


export function setTitle(title) {
  return {
    type: SET_TITLE,
    title,
  };
}

export function setDescription(description) {
  return {
    type: SET_DESCRIPTION,
    description,
  };
}

export function sendPublication() {
  return function (dispatch) {
    const userId = store.getState().userState.id;
    const publication = {
      title: store.getState().publicationState.publication.title,
      description: store.getState().publicationState.publication.description,
      userid: userId,
    };
    return axios.post(`${API_DOMAIN}/api/new-publication`, publication)
    .then((response) => {
      console.log(response);
      dispatch({ type: PUBLICATION_CREATE_SUCCESS });
      hashHistory.push('/');
      dispatch(notificationAdd({
        title: 'Publicación correcta',
        message: 'La publicación se ha realizado correctamente',
        level: 'success',
      }));
    dispatch({ type: types.RESET });
    })
    .catch(() => {
      dispatch(notificationAdd({
        title: 'Error al publicar',
        message: 'Inténtelo de nuevo más tarde',
        level: 'error',
      }));
      return dispatch({ type: PUBLICATION_CREATE_FAILED });
    });
  };
}

