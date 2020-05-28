import {SEARCH_MOVIE , FETCH_MOVIES, BUTTON_CLICK, SHOW_LIST, SHOW_HOME} from '../config/Strings';

export const searchMovie = text => {
    return {
        type: SEARCH_MOVIE,
        payload: text
    }
};

export const fetchMovies = list => {
    return {
        type: FETCH_MOVIES,
        payload: list
    }
}

export const listAction = (list) => {
    return {
        type: BUTTON_CLICK,
        payload: list
    }
}

export const showList = (list) => {
    return {
        type: SHOW_LIST,
        payload: list
    }
}

export const showHome = () => {
    return {
        type: SHOW_HOME
    }
}