import React from 'react';
import { Image } from 'react-native-elements';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as db from '../../config/firebaseConfig';
import { useNavigation } from '@react-navigation/native';

const SavedItem = ({ item, userId }) => {
	const { id, imageUri, title } = item;

	console.log(userId, 'userId');
	let movieId = id;
	console.log(movieId, 'movieId');
	const navigation = useNavigation();

	const deleteMovie = async () => {
		await db.deleteMovieItem(userId, movieId, navigation);
	};
	return (
		<View style={styles.view}>
			<Text style={styles.text}>{title}</Text>
			<Image source={{ uri: imageUri }} alt='' style={styles.image} />
			<TouchableOpacity onPress={deleteMovie}>
				<MaterialCommunityIcons
					name='trash-can-outline'
					size={24}
					color='white'
				/>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	view: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'black',
		width: 400,
		alignSelf: 'center',
		// width: '100%',
		// flex: 2,
		marginTop: 24,
	},
	text: {
		color: 'white',
		fontSize: 24,
		alignSelf: 'center',
		fontWeight: 'bold',
	},
	image: {
		width: 300,
		height: 200,
	},
	wrap: {
		width: '100%',
	},
});

export default SavedItem;
