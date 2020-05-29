import React, { useEffect } from 'react';
// import { createSelector } from 'reselect';
import axios from 'axios';
import { useSelector, useDispatch} from 'react-redux';
import { fetchMovies, searchMovie, showList, showHome } from '../actions/addToList';

import {
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
  CardColumns,
  Container
} from 'react-bootstrap';
import { MdSearch, MdLibraryAdd } from 'react-icons/md';
import Movie from './Movie';

const MovieList = (props) => { 

    const favourite = useSelector(state => state.favourite);
    const dispatch = useDispatch();

    const search = () => {
        axios.get(`https://www.omdbapi.com/?apikey=d0ecb0ed&s=${favourite.searchTerm === '' ? 'space': favourite.searchTerm}&plot=full`)
        .then(res => dispatch(fetchMovies(res.data.Search)))
        .catch(err => console.log(err));
    };

    useEffect(search, []);

    const handleChange = event => {
        dispatch(searchMovie(event.target.value));
    };

    const showFav = () => {
        dispatch(showList(favourite.myList));
    }

    const goHome = () => {
        dispatch(showHome());
    }

        return (
            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand onClick={goHome}>Search Movies</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link onClick={showFav}>
                                <MdLibraryAdd/>
                                My List
                            </Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search for a movie" onChange={handleChange} onKeyUp={search} className="mr-sm-2" />
                            <Button variant="outline-success" onClick={search}>
                                <MdSearch/>
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <br/>
                <CardColumns>
                    {favourite.movieList && favourite.movieList.length > 0 ? (
                        favourite.movieList.map(movie => (
                            <Movie data={movie} key={movie.imdbID} />
                        ))
                    ) : (
                        <p>
                            Couldn't find any movie. Please search again using
                            another search criteria.
                        </p>
                    )}
                </CardColumns>

            </Container>
        );
}
export default MovieList;