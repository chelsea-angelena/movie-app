// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Input, TextInput } from 'react-native-elements';
// import { Feather } from '@expo/vector-icons';
// import colors from '../../style/colors';

// export default function SearchBar({ queryText, query, onSearchSubmit, onChangeText }) {
// 	// console.log({ term }, 'term');
// 	return (
// 		<View>
// 			<TextInput
// 				// containerStyle={styles.view}
// 				// inputContainerStyle={styles.input}
// 				leftIconStyle={styles.icon}
// 				leftIcon={{
// 					type: 'feather',
// 					name: 'search',
// 					size: 22,
// 				}}
// 				autoCapitalize='none'
// 				autoCorrect={false}
// 				placeholder='Search Movies...'
// 				text={queryText}
// 				value={query}
// 				onEndEditing={onSearchSubmit}
// 				onChangeText={(text) => setText(text)}
// 				maxLength={100}
// 			/>
// 		</View>
// 	);
// }

import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, SearchBar } from 'react-native-elements';

const MySearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			{/* <Feather name='search' style={styles.iconStyle} /> */}
			<SearchBar
				autoCapitalize='none'
				autoCorrect={false}
				style={styles.inputStyle}
				placeholder='Search'
				value={term}
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
			/>

		</View>
	);
};

// const MySearchBar = ({ searchApi, updateSearch, search }) => {
// 	return (
// 		<>
// 			<SearchBar
// 				placeholder='Type Here...'
// 				onChangeText={updateSearch}
// 				showLoading
// 			/>
// 			<Button onPress={searchApi} />
// 		</>
// 	);
// };

export default MySearchBar;
const styles = StyleSheet.create({
	view: {
		flexDirection: 'row',
		backgroundColor: '#E0E0E0',
		width: '90%',
		marginTop: 16,
		alignItems: 'center',
		borderRadius: 8,
		alignSelf: 'center',
		height: 'auto',
		justifyContent: 'center',
	},
	input: {
		flex: 1,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%',
		height: 'auto',
		marginBottom: 24,
		flexDirection: 'row',
	},
	icon: {
		padding: 15,
		marginRight: 5,
		marginBottom: 12,
		paddingBottom: 10,
		alignSelf: 'center',
	},
});
