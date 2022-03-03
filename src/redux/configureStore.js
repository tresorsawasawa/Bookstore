import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books';

const rootReducer = combineReducers({
  booksReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
