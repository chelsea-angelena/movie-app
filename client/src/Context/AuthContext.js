import React, { useState, useEffect, useContext } from 'react';
import * as db from '../../config/firebaseConfig';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	// const [error, setError] = useState(null);
	// const [loading, setLoading] = useState(true);

	useEffect(() => {
		db.checkUserAuth(setUser);
	}, []);

	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
