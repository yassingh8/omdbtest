import {SEARCH_MOVIE, FETCH_MOVIES, BUTTON_CLICK, SHOW_LIST, SHOW_HOME} from '../config/Strings';


const initialState = {
    movieList: [],
    myList: [],
    searchTerm: '',
    showMy: false
}

export default function(state = initialState, action){
    switch(action.type){
        case SEARCH_MOVIE:
            return{
                ...state,
                searchTerm: action.payload,
            }
        case FETCH_MOVIES:
            return{
                ...state,
                movieList: action.payload
            }
        case BUTTON_CLICK:
            return{
                ...state,
                myList: action.payload
            }
        case SHOW_LIST:
            return{
                ...state,
                movieList: action.payload,
                showMy: true
            }
        case SHOW_HOME:
            return{
                ...state,
                movieList: [],
                showMy: false
            }
        default:
            return state
    }
}