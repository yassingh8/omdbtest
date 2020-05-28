import React from 'react';
// import { useSelector } from 'react-redux';
// import { createSelector } from 'reselect';
import axios from 'axios';
//import {Route, Switch } from 'react-router-dom';
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


// const getProps = createSelector(
//     state => state.favourite,
//     todos => todos.filter(todo => todo.isDone).length
//   )

// class MoviesList extends React.Component {
const MoviesList = (props) => { 
    // state = {
    //     moviesList: ['tt2294629'],
    //     searchTerm: ''
    // };
    const favourite = useSelector(state => state.favourite);
    const dispatch = useDispatch();

    const search = event => {
        event.preventDefault();
        axios.get(`https://www.omdbapi.com/?apikey=d0ecb0ed&s=${favourite.searchTerm}&plot=full`)
        .then(res => dispatch(fetchMovies(res.data.Search)))
        .catch(err => console.log(err));
    };

    const handleChange = event => {
        dispatch(searchMovie(event.target.value));
        // setState({
        //     searchTerm: event.target.value
        // });
    };

    const showFav = () => {
        dispatch(showList(favourite.myList));
    }

    const goHome = () => {
        dispatch(showHome());
    }
    // render() {
        // const { moviesList } = state;

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
                            <FormControl type="text" placeholder="Search for a movie" onChange={handleChange} className="mr-sm-2" />
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
                            <Movie data={movie} key={movie} />
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
    // }
}

// const mapStateToProps = state => ({
//     searchTerm: state.favourite.searchTerm,
//     myList: state.favourite.myList,
//     movieList: state.favourite.movieList,
//     showMy: state.favourite.showMy
//   })
  
// export default connect(mapStateToProps, { searchMovie, showList, showHome, fetchMovies })(MoviesList);
export default MoviesList;