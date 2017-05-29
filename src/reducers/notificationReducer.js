import * as types from 'actions/action-types';

const initialState = {
  notification: {
    title: '',
    message: '',
    level: 'success',
    position: 'tr',
    autoDismiss: 5,
    dismissible: true,
    action: null,
    onAdd: null,
    onRemove: null,
    uid: null
  },
  ready: false
};

export function notificationReducer(state = initialState, action) {
  switch (action.type) {
  case types.ADD_NOTIFICATION:
    return {
      ...state,
      notification: {
        ...initialState.notification,
        ...action.notification,
      },
      ready: true,
    };
  case types.CLEAR_NOTIFICATION:
  case types.RESET:
    return { ...initialState };
  default:
    return state;
  }
}
