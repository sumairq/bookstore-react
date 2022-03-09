import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';

const reducers = combineReducers({
  books: booksReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(logger),
);

export default store;
