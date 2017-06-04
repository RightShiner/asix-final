import axios from 'axios';
import { API_DOMAIN } from '../helpers/apiCredentials';
import store from 'store';

export const SET_TITLE = 'SET_TITLE';
export const SET_DESCRIPTION = 'SET_DESCRIPTION';

export function sendPublication(data) {
	return function (dispatch) {
		const userId = store.getState().userState.id;
		const publication = {
			title: data.title,
			description: data.description,
			userid: userId,
		};
	};
}

export function setTitle(title) {
	return {
		type: SET_TITLE,
		title,
	};
}