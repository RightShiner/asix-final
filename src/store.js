import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducers from './reducers/index';

const middlewares = [ thunkMiddleware ];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares)),
  autoRehydrate(),
);

persistStore(
  store,
  {
    blacklist: [
      'notificationState',
    ],
  }
);

export default store;
