/**
 * HTTP call configuration
 * @param  {function} getState    GetState function
 * @param  {Object} extraParams Extra params to insert into config
 * @return {Object}             Final http call configuration
 */
export default function httpConfig(extraParams = {}) {
  return {
    params: {
      ...extraParams,
    },
    headers: {
      'Accept': 'application/x-www-form-urlencoded',
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  };
}
