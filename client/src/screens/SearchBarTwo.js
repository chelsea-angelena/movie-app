import React, { Component, useEffect, useState } from 'react';
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	ImageBackground,
} from 'react-native';
import { SearchBar, Button } from 'react-native-elements';
import axios from 'axios';
import DataList from '../components/searchscreen/DataList';
import Screen from '../components/styled/Screen.js';
import { useColorScheme } from 'react-native-appearance';
import { API_KEY } from '../../env';
import colors from '../style/colors';

const introTitle = 'Welcome to the OMDB Movie Nominations!';

const MySearchBar = () => {
	const [searchInput, setSearchInput] = useState('');
	const [searchTerm, setSearchTerm] = useState('');
	const [results, setResults] = useState([]);
	const [error, setError] = useState('');
	let colorScheme = useColorScheme();
	const updateSearch = (searchTerm) => {
		setSearchTerm(searchTerm);
	};

	const submitSearch = async () => {
		try {
			let response = await axios.get(
				`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`
			);
			setResults(response.data.Search);
		} catch (err) {
			setError('');
		}
	};

	// useEffect(() => {
	// 	setSearchTerm('');
	// 	submitSearch();
	// }, []);

	return (
		<View style={styles.view}>
			<ImageBackground
				alt='theatre'
				style={{ resizeMode: 'cover', height: 1000 }}
				source={{
					uri:
						'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
				}}
			>
				{/* <ScrollView> */}
				<SearchBar
					style={{ borderColor: colors.black }}
					placeholder='Type Here to Search...'
					onChangeText={updateSearch}
					value={searchTerm}
				/>
				<Text>{searchTerm}</Text>
				{searchTerm ? (
					<Button onPress={submitSearch} title='Submit' style={styles.button} />
				) : (
					<>
						<Text style={styles.text}>Welcome to the OMDB movie Search!</Text>
						<Text style={styles.subText}>
							Search for your favorite films and save your collection
						</Text>
					</>
				)}
				<Text>{searchInput}</Text>
				{results ? <DataList results={results} /> : null}
				{/* </ScrollView> */}
			</ImageBackground>
		</View>
	);
};

export default MySearchBar;

const styles = StyleSheet.create({
	view: {
		flex: 1,
		width: '100%',
		marginTop: 40,
		backgroundColor: 'black',
	},
	button: {
		color: 'white',
		backgroundColor: colors.grey,
		width: 400,

		height: 56,
		borderRadius: 8,
		marginLeft: 24,
		marginRight: 24,
		alignSelf: 'center',
	},
	text: {
		color: 'white',
		fontSize: 32,
		textAlign: 'center',
		marginTop: 24,
		marginLeft: 24,
		marginRight: 24,
		// fontFamily: 'Optima-Bold',
	},
	subText: {
		color: 'white',
		fontSize: 24,
		textAlign: 'center',
		marginTop: 24,
		marginLeft: 24,
		marginRight: 24,
	},
});
