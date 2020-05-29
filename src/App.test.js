import React from 'react';
import App from './App';

import { shallow } from 'enzyme';
import MoviesList from './components/MovieList';

describe('<App />', () => {
  test('renders without crashing', () => {
    // shallow(<App/>);
    const wrapper = shallow(<App/>);
    const movieslist = <MoviesList/>;
    expect(wrapper.contains(movieslist)).toEqual(true);
  });
});