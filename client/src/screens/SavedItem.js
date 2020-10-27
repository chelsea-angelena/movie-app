import React from 'react';
import { Image } from 'react-native-elements';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as db from '../../config/firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const SavedItem = ({ item, userId }) => {
	const { id, imageUri, title } = item;
	let movieId = id;
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
		marginTop: 24,
		borderColor: 'white',
		borderWidth: 0.5,
		borderStyle: 'solid',
		padding: 16,
		textAlign: 'center',
	},
	text: {
		color: 'white',
		fontSize: 24,
		alignSelf: 'center',
		fontWeight: 'bold',
		paddingBottom: 16,
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
