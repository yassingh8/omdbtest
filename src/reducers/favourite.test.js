// import configureStore from 'redux-mock-store';

import favourite from './favourite';
import { SEARCH_MOVIE, FETCH_MOVIES, SHOW_LIST, BUTTON_CLICK, SHOW_HOME } from '../config/Strings';
// const mockStore = configureStore();

const initialState = {
    movieList: [],
    myList: [],
    searchTerm: '',
    showMy: false
};
// const store = mockStore(initialState);

describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = { type: 'dummy_action' };
      expect(favourite(undefined, action)).toEqual(initialState);
    });

    test('returns the correct state', () => {
        const action = { type: SEARCH_MOVIE, payload: 'search' };
        const expectedState = {searchTerm: 'search'};
    
        expect(favourite({}, action)).toEqual(expectedState);
    });

    test('returns the correct state', () => {
        const action = { type: FETCH_MOVIES, payload: [] };
        const expectedState = {movieList: []};
    
        expect(favourite({}, action)).toEqual(expectedState);
    });

    test('returns the correct state', () => {
        const action = { type: SHOW_LIST, payload: [] };
        const expectedState = {movieList: [], showMy: true};
    
        expect(favourite({}, action)).toEqual(expectedState);
    });

    test('returns the correct state', () => {
        const action = { type: BUTTON_CLICK, payload: [] };
        const expectedState = {myList: []};
    
        expect(favourite({}, action)).toEqual(expectedState);
    });

    test('returns the correct state', () => {
        const action = { type: SHOW_HOME, payload: [] };
        const expectedState = {movieList: [], showMy: false};
    
        expect(favourite({}, action)).toEqual(expectedState);
    });
});