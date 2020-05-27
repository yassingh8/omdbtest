import {SEARCH_MOVIE , FETCH_MOVIES, BUTTON_CLICK, SHOW_LIST} from '../config/Strings';
import axios from 'axios';

export const searchMovie = text => dispatch => {
    dispatch({
        type:SEARCH_MOVIE,
        payload: text
    });
};

export const fetchMovies = text => dispatch => {
    const temp =axios.get(`https://www.omdbapi.com/?apikey=d0ecb0ed&s=${text}&plot=full`)
        .then(response => dispatch({
            type:FETCH_MOVIES,
            payload:response.data.Search,
            
        })
        )
        .catch(err => console.log(err));
        console.log(temp)    
}

export const listAction = (list) => dispatch => {
    dispatch({
        type: BUTTON_CLICK,
        payload: list
    })
}

export const showList = (list) => dispatch => {
    dispatch({
        type: SHOW_LIST,
        payload: list
    })
}