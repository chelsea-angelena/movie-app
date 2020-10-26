// import createDataContext from './createDataContext';
// import * as db from '../../config/firebaseConfig';

// const movieListReducer = (state, action) => {
// 	switch (action.type) {
// 		case 'save_movie':
// 			return [
// 				...state,
// 				{
// 					title: action.payload.movie.title,
// 					id: action.payload.movie.id,
// 					imageUri: action.payload.movie.imageUri,
// 				},
// 			];
// 		case 'get_savedMovies':
// 			return [
// 				...state,
// 				{
// 					title: action.payload.movie.title,
// 					id: action.payload.movie.id,
// 					imageUri: action.payload.movie.imageUri,
// 				},
// 			];
// 		case 'delete_movie':
// 			return state.filter((movie) => movie.id !== action.payload);
// 		default:
// 			return state;
// 	}
// };

// const saveMovie = (dispatch) => {
// 	return async (imdbID, movie, userId, callback) => {
// 		try {
// 			await db.saveMovie(imdbID, movie, userId);
// 			dispatch({
// 				type: 'save_movie',
// 				payload: { movie: movie },
// 			});
// 			callback();
// 		} catch (e) {
// 			console.log(e);
// 		}
// 	};
// };
// const getSavedMovieList = (dispatch) => {
// 	return async (movieList, callback) => {
// 		try {
// 			await db.getSavedMovies();
// 			dispatch({
// 				type: 'get_savedMovieList',
// 				payload: { movieList },
// 			});
// 			callback();
// 		} catch (e) {
// 			console.log(e);
// 		}
// 	};
// };

// const deleteMovie = (dispatch) => {
// 	return (id) => {
// 		db.deleteMovieItem();
// 		dispatch({ type: 'delete_movie', payload: id });
// 	};
// };

// export const { Context, Provider } = createDataContext(
// 	movieListReducer,
// 	{ saveMovie, deleteMovie, getSavedMovieList },
// 	[]
// );
