import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { API_Key } from '.././../env';

export default function useMovieData() {
	const [search, setSearch] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	const submitSearch = async ({ searchTerm }) => {
		try {
			let response = await axios.get(
				`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`
			);
			console.log(response.data.Search, 'useResults response.data');
			setResults(response.data.Search);
			setLoading(false);
		} catch (err) {
			setError('');
		}
	};

	useEffect(() => {
		// setSearchTerm('Last Unicorn');
		submitSearch();
	}, []);
	return [search, loading, error, submitSearch];
}
