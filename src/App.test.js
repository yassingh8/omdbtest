import React from 'react';
import App from './App';

import { shallow, mount } from 'enzyme';
import MovieList from './components/MovieList';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
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

describe('<App />', () => {
  test('renders without crashing', () => {
    // shallow(<App/>);
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    // const movielist = <MovieList/>;
    const components = wrapper//.dive();
    expect(wrapper.find('App').length).toEqual(1);
  });
});