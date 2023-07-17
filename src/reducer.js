import { AFTER_MOVIE, ADD_FAVORITE, REMOVE_FAVORITE, BEFORE_MOVIE, BASA_DON } from "./action";
import { movies } from "./movies";

const initialState = {
    sira: 0,
    movies: movies,
    favourites: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case AFTER_MOVIE:
            return {
                ...state,
                sira: state.sira + 1,
            };

        case BEFORE_MOVIE:
            return {
                ...state,
                sira: state.sira - 1,
            };

        case BASA_DON:
            return {
                ...state,
                sira: 0,
            };

        case ADD_FAVORITE: {
            const favoriteMovie = action.payload;
            if (state.favourites.find((movie) => movie.id === favoriteMovie.id) === undefined){
                return {
                    ...state,
                    favourites: [...state.favourites, favoriteMovie]
                };
            }
            return state;
        }

        case REMOVE_FAVORITE: {
            return {
                ...state,
                favourites: [...state.favourites.filter(x => x.id !== action.payload)],
            };
        }
        default:
            return state;
    }
};
export default reducer;