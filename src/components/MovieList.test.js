import React from 'react';
// import { render } from '@testing-library/react';
// import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';
import MovieList from './MovieList';
import Movie from './Movie';
import App from '../App';
import configureStore from 'redux-mock-store'; // Smart components
import toJson from 'enzyme-to-json';

const mockStore = configureStore();

const initialState = {
    movieList: [],
    myList: [],
    searchTerm: '',
    showMy: false
};

const store = mockStore(initialState);

describe('<MovieList />', () => {
    test('renders without crash', () => {
        const wrapper = shallow(<MovieList store={store}/>).dive();
        // const movie = wrapper.dive();
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});