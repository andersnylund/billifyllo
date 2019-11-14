import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import filterReducer from './reducers/filterReducer';
import productListReducer from './reducers/productListReducer';
import singleProductReducer from './reducers/singleProductReducer';
import categoryReducer from './reducers/categoryReducer';

const reducer = combineReducers({
  filter: filterReducer,
  productList: productListReducer,
  product: singleProductReducer,
  category: categoryReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export type AppState = ReturnType<typeof reducer>;

export default store;
