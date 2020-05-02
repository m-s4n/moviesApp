import {ActionType} from 'redux-promise-middleware';

// Fetch movies
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_PENDING = FETCH_MOVIES + '_' + ActionType.Pending;
export const FETCH_MOVIES_FULFILLED = FETCH_MOVIES + '_' + ActionType.Fulfilled;
export const FETCH_MOVIES_REJECTED = FETCH_MOVIES + '_' + ActionType.Rejected;

// Add movie

export const ADD_MOVIE = 'ADD_MOVIE';
export const ADD_MOVIE_PENDING = ADD_MOVIE + '_' + ActionType.Pending;
export const ADD_MOVIE_FULFILLED = ADD_MOVIE + '_' + ActionType.Fulfilled;
export const ADD_MOVIE_REJECTED = ADD_MOVIE + '_' + ActionType.Rejected;