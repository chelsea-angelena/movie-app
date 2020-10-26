import React from 'react';
import createDataContext from './createDataContext';
import useAuth from '../hooks/useAuth';

export const UserContext = React.createContext();

//children is the prop passed from parent component
export const UserProvider = ({ children }) => {
	const [user] = useAuth();
	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

// const userReducer = (state, action) => {
// 	switch (action.type) {
// 		case 'add_user':
// 			return [
// 				...state,
// 				{
// 					displayName: action.payload.user.displayName,
// 					id: action.payload.user.uid,
// 					email: action.payload.user.email,
// 				},
// 			];

// 		case 'signout':
// 			return state.filter((movie) => movie.id !== action.payload);
// 		default:
// 			return state;
// 	}
// };

// const signIn = (dispatch) => {
// 	return async ({ email, password }) => {
// 		try {
// 			db.signIn({ email, password });
// 			dispatch({
// 				type: 'signIn',
// 				payload: { user: { displayName, uid, email } },
// 			});
// 			callback();
// 		} catch (e) {
// 			console.log(e);
// 		}
// 	};
// };

// const signUp = () => {
// 	return ({ email, password, displayName }) => {
// 		const signIn = (dispatch) => {
// 			return async ({ email, password }) => {
// 				try {
// 					db.signIn({ email, password });
// 					dispatch({
// 						type: 'signIn',
// 						payload: { user: { displayName, uid, email } },
// 					});
// 					callback();
// 				} catch (e) {
// 					console.log(e);
// 				}
// 			};
// 		};
// 	};
// };

// const signOut = (dispatch) => {
// 	return ({}) => {};
// };
// const updateUser = ({ email, password, displayName, photoURL }) => {};

// export const { Context, Provider } = createDataContext(
// 	userReducer,
// 	{  },
// 	[]
// );
