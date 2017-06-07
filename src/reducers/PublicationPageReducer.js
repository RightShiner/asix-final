import * as types from '../actions/action-types';
import {
  SET_TITLE,
  SET_DESCRIPTION,
  CLEAR_PUBLICATION
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
  case SET_DESCRIPTION:
    return {
      ...state,
      publication: {
        ...state.publication,
        description: action.description
      }
    };
  case CLEAR_PUBLICATION:
  case types.RESET:
    return { ...initialState };
  default:
    return state;
  }
}
