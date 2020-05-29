import React from 'react';
import App from './App';

import { shallow } from 'enzyme';
import MoviesList from './components/MovieList';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components

const mockStore = configureStore();

const initialState = {};

const store = mockStore(initialState);

describe('<App />', () => {
  test('renders without crashing', () => {
    // shallow(<App/>);
    const wrapper = shallow(<App store={store}/>);
    // const movieslist = <MoviesList/>;
    // expect(wrapper.contains(movieslist)).toEqual(true);
    const componentss = wrapper.dive();
    expect(toJson(componentss)).toMatchSnapshot();
  });
});