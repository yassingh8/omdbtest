import React from 'react';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import { SEARCH_MOVIE, FETCH_MOVIES, BUTTON_CLICK, SHOW_LIST, SHOW_HOME } from '../config/Strings';
import * as selectActions from './addToList';
const mockStore = configureStore();

const initialState = {
  favourite: {
    movieList: [],
    myList: [],
    searchTerm: '',
    showMy: false
  }
};

const store = mockStore(initialState);

describe('actions', () => {
    beforeEach(() => { // Runs before each test in the suite
        store.clearActions();
    });
    
    test('Dispatches the correct action and payload', () => {
        const expectedActions = [
          {
            payload: 'movie',
            type: SEARCH_MOVIE
          }
        ];
    
        store.dispatch(selectActions.searchMovie('movie'));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Dispatches the correct action and payload', () => {
        const expectedActions = [
            {
                payload: [],
                type: FETCH_MOVIES
            }
        ];
        store.dispatch(selectActions.fetchMovies([]));
        expect(store.getActions()).toEqual(expectedActions);
    });
    
    test('Dispatches the correct action and payload', () => {
        const expectedActions = [
            {
                payload: [],
                type: BUTTON_CLICK
            }
        ];
        
        store.dispatch(selectActions.listAction([]));
        expect(store.getActions()).toEqual(expectedActions);
    });
        
    test('Dispatches the correct action and payload', () => {
        const expectedActions = [
            {
                payload: [],
                type: SHOW_LIST
            }
        ];
        store.dispatch(selectActions.showList([]));
        expect(store.getActions()).toEqual(expectedActions);
    });
    
    test('Dispatches the correct action and payload', () => {
        const expectedActions = [
            {
                type: SHOW_HOME
            }
        ];
        store.dispatch(selectActions.showHome());
        expect(store.getActions()).toEqual(expectedActions);
    });
});