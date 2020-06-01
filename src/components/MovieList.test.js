import React from 'react';
// import { render } from '@testing-library/react';
// import ReactDOM from 'react-dom';

import { shallow, mount, ReactWrapper } from 'enzyme';
import MovieList from './MovieList';
import Movie from './Movie';
import App from '../App';
import configureStore from 'redux-mock-store'; // Smart components
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';

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
        const wrapper = mount(
            <Provider store={store}>
                <MovieList store={store}/>
            </Provider>
        );
        expect(wrapper.find('MovieList').length).toEqual(1);
    });
});
