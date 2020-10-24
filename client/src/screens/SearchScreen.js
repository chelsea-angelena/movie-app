// import React, { useState } from 'react';
// import {
// 	TextInput,
// 	SafeAreaView,
// 	ScrollView,
// 	View,
// 	StyleSheet,
// } from 'react-native';
// import {
// 	SearchBar,
// 	Input,
// 	Card,
// 	Text,
// 	Button,
// 	FlatList,
// 	ListItem,
// } from 'react-native-elements';
// // import MySearchBar from '../components/searchscreen/SearchBar';
// import useResults from '../hooks/useResults';
// import colors from '../style/colors';
// import DataList from '../components/searchscreen/DataList';

// export default function SearchScreen({ navigation, route }, props) {
// 	const [term, setSearch] = useState('');
// 	const [searchApi, results, error] = useResults();

// 	const updateSearch = (value) => {
// 		setSearch({ value });
// 	};
// 	// let movieArray = (results) => {
// 	// 	results.forEach((result) => {
// 	// 		console.log(result, 'array');
// 	// 	});
// 	// };
// 	// console.log(movieArray, 'movieArrayy');
// 	// console.log(results, 'results');

// 	// const handleSearch = (query) => {
// 	// 	// const filteredData = filter(fullData, poster => {
// 	// 	//   return contains(poster);
// 	// 	// });
// 	// 	// setData(filteredData);
// 	// 	setQuery(query);
// 	// };

// 	const callApi = async ({ term }) => {
// 		searchApi(term);
// 	};

// 	return (
// 		<View style={styles.parent}>
// 			{/* <Text>We have Found {results.totalResults} results</Text> */}
// 			<View>
// 				<SearchBar
// 					autoCapitalize='none'
// 					autoCorrect={false}
// 					placeholder='Search'
// 					value={term}
// 					onChangeText={updateSearch}
// 					// onEndEditing={onTermSubmit}
// 				/>
// 				<Button onPress={callApi} title='Submit Search' />
// 			</View>
// 			<View style={styles.list}>
// 				<DataList navigation={navigation} data={results} />
// 			</View>
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	view: {
// 		flexDirection: 'row',
// 		backgroundColor: '#E0E0E0',
// 		width: '90%',
// 		marginTop: 16,
// 		alignItems: 'center',
// 		borderRadius: 8,
// 		alignSelf: 'center',
// 		height: 'auto',
// 		justifyContent: 'center',
// 	},
// 	input: {
// 		flex: 1,
// 		alignSelf: 'center',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 		width: '90%',
// 		height: 'auto',
// 		marginBottom: 24,
// 		flexDirection: 'row',
// 	},
// 	icon: {
// 		padding: 15,
// 		marginRight: 5,
// 		marginBottom: 12,
// 		paddingBottom: 10,
// 		alignSelf: 'center',
// 	},
// 	parent: {
// 		flex: 1,
// 		backgroundColor: '#FAFAFA',
// 	},
// 	list: {
// 		backgroundColor: '#F5F5F5',
// 	},
// 	caption: {
// 		marginLeft: 15,
// 		color: colors.lighter,
// 		padding: 5,
// 	},
// 	term: {
// 		color: colors.lighter,
// 	},
// 	search: {
// 		width: 200,
// 	},
// 	// divider: {
// 	//   color: 'white',
// 	//   width: '90%',
// 	//   borderStyle: 'solid',
// 	//   marginTop: 20,
// 	//   marginBottom: 20,
// 	//   height: 3,
// 	//   alignSelf: 'center'
// 	// }
// });
