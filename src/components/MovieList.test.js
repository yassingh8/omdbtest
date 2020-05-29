import React from 'react';
// import { render } from '@testing-library/react';
// import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';
import MovieList from './MovieList';
import Movie from './Movie';
import App from '../App';
import configureStore from 'redux-mock-store'; // Smart components
import toJson from 'enzyme-to-json';
import favourite from '../reducers/favourite';
import {SEARCH_MOVIE, FETCH_MOVIES, SHOW_LIST} from '../config/Strings';

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

describe('<MovieList />', () => {
    test('renders without crash', () => {
        const wrapper = shallow(<MovieList store={store}/>);
        const movies = wrapper.dive();
        expect(toJson(movies)).toMatchSnapshot();
    });
});

describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = { type: 'SEARCH_MOVIE'};
  
      expect(favourite(undefined, action)).toMatchSnapshot();
    });
  })

describe('SHOW_LIST', () => {
    test('is correct', () => {
      const action = { type: 'SHOW_LIST', payload: []};
  
      expect(favourite(undefined, action)).toMatchSnapshot();
    });
  })

// describe('FETCH_MOVIES', () => {
//     test('is correct', () => {
//       const action = { type: 'FETCH_MOVIES'};
  
//       expect(favourite(undefined, action)).toMatchSnapshot();
//     });
//   })
 