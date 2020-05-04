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

// Fetch movie 

export const FETCH_MOVIE_BY_ID = 'FETCH_MOVIE_BY_ID';
export const FETCH_MOVIE_BY_ID_PENDING = FETCH_MOVIE_BY_ID + '_' + ActionType.Pending;
export const FETCH_MOVIE_BY_ID_FULFILLED = FETCH_MOVIE_BY_ID + '_' + ActionType.Fulfilled;
export const FETCH_MOVIE_BY_ID_REJECTED = FETCH_MOVIE_BY_ID + '_' + ActionType.Rejected;

//Delete movie
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const DELETE_MOVIE_PENDING = DELETE_MOVIE + '_' + ActionType.Pending;
export const DELETE_MOVIE_FULFILLED = DELETE_MOVIE + '_' + ActionType.Fulfilled;
export const DELETE_MOVIE_REJECTED = DELETE_MOVIE + '_' + ActionType.Rejected;

// update movie 
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const UPDATE_MOVIE_PENDING = UPDATE_MOVIE + '_' + ActionType.Pending;
export const UPDATE_MOVIE_FULFILLED = UPDATE_MOVIE + '_' + ActionType.Fulfilled;
export const UPDATE_MOVIE_REJECTED = UPDATE_MOVIE + '_' + ActionType.Rejected;