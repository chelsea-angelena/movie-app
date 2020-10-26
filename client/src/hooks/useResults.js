import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../../../env.js';

export default function useResults() {
	const [results, setResults] = useState([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);

	let searchApi = async ({ searchTerm }) => {
		console.log({ searchTerm }, 'term from useResults');
		try {
			let response = await axios.get(
				`http://www.omdbapi.com/?s=${term}&apikey=${API_KEY}`
			);
			console.log(response.data.Search, 'useResults response.data');
			setLoading(false);
			setResults(response.data.Search);
		} catch (err) {
			setError('');
		}
	};

	useEffect(() => {
		searchApi('Batman');
	}, []);

	return [searchApi, results, error];
}
