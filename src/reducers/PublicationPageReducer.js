import * as types from '../actions/action-types';
import {
	SET_TITLE,
} from '../actions/PublicationPageActions';

const initialState = {
	publication: {
		title: '',
		description: '',
		image: '',
	}
};

export function publicationReducer(state = initialState, action) {
  switch (action.type) {
  case SET_TITLE:
    return {
    	...state,
    	publication: {
    		...state.publication,
      		title: action.title,
      	}
    };
  case types.RESET:
    return { ...initialState };
  default:
    return state;
  }
}
