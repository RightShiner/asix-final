import * as types from './action-types';

/**
 * Add a notification
 * @param {string} notification New notification
 */
export function notificationAdd(notificationParams) {
  return {
    type: types.ADD_NOTIFICATION,
    notification: notificationParams
  };
}

/**
 * Notification clear
 * @param {string} notification New notification
 */
export function notificationClear() {
  return {
    type: types.CLEAR_NOTIFICATION
  };
}
