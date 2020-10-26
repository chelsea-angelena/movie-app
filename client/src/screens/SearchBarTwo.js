import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import FormButton from '../screens/Auth/FormButton';
import DataList from '../components/searchscreen/DataList';
import { API_KEY } from '../../env';
import colors from '../styles/colors';
import AppText from '../components/Text.js';
const MySearchBar = () => {
	const [searchInput, setSearchInput] = useState('');
	const [searchTerm, setSearchTerm] = useState('');
	const [results, setResults] = useState([]);
	const [error, setError] = useState('');

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
			setError('error');
		}
	};

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
				<View style={styles.innerView}>
					<SearchBar
						// style={{ borderColor: colors.black, backgroundColor: colors.black }}
						placeholder='Type Here to Search...'
						onChangeText={updateSearch}
						value={searchTerm}
					/>
					<AppText>{searchTerm}</AppText>
				</View>
				{searchTerm ? (
					<View style={styles.innerView}>
						<FormButton
							buttonType='outline'
							onPress={submitSearch}
							title='Submit'
							buttonColor={colors.white}
							backgroundColor={colors.red}
						/>
					</View>
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
	},
	subText: {
		color: 'white',
		fontSize: 24,
		textAlign: 'center',
		marginTop: 24,
		marginLeft: 24,
		marginRight: 24,
	},
	innerView: {
		maxWidth: 500,
		minWidth: 320,
		width: '100%',
		alignSelf: 'center',
	},
});
