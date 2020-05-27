import React from 'react';
import axios from 'axios';
//import {Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchMovies, searchMovie, showList } from '../actions/addToList';
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

class MoviesList extends React.Component {
    // state = {
    //     moviesList: ['tt2294629'],
    //     searchTerm: ''
    // };

    search = event => {
        event.preventDefault();
        this.props.fetchMovies(this.props.searchTerm);
        // axios
        //     .get(
        //         `https://www.omdbapi.com/?apikey=d0ecb0ed&s=${this.state.searchTerm}&plot=full`
        //     )
        //     .then(res => res.data)
        //     .then(res => {
        //         if (!res.Search) {
        //             this.setState({ moviesList: [] });
        //             return;
        //         }

        //         const moviesList = res.Search.map(movie => movie.imdbID);
        //         this.setState({
        //             moviesList
        //         });
        //     });
    };

    handleChange = event => {
        this.props.searchMovie(event.target.value);
        // this.setState({
        //     searchTerm: event.target.value
        // });
    };

    showFav = () => {
        this.props.showList(this.props.myList);
    }
    render() {
        // const { moviesList } = this.state;

        return (
            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Search Movies</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link onClick={this.showFav}>
                                <MdLibraryAdd/>
                                My List
                            </Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search for a movie" onChange={this.handleChange} className="mr-sm-2" />
                            <Button variant="outline-success" onClick={this.search}>
                                <MdSearch/>
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <br/>
                <CardColumns>
                    {this.props.movieList && this.props.movieList.length > 0 ? (
                        this.props.movieList.map(movie => (
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
    }
}

const mapStateToProps = state => ({
    searchTerm: state.favourite.searchTerm,
    myList: state.favourite.myList,
    movieList: state.favourite.movieList,
    showMy: state.favourite.showMy
  })
  
export default connect(mapStateToProps, { searchMovie, showList, fetchMovies })(MoviesList);