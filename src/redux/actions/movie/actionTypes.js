import {ActionType} from 'redux-promise-middleware';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_PENDING = FETCH_MOVIES + '_' + ActionType.Pending;
export const FETCH_MOVIES_FULFILLED = FETCH_MOVIES + '_' + ActionType.Fulfilled;
export const FETCH_MOVIES_REJECTED = FETCH_MOVIES + '_' + ActionType.Rejected;