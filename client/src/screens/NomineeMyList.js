import React, { useState, useEffect, useContext } from 'react';
import { Image, Button, Card } from 'react-native-elements';
import {
	ImageBackground,
	SafeAreaView,
	ScrollView,
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	FlatList,
} from 'react-native';
import { Context as MovieListContext } from '../Context/MovieListContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useAuth from '../hooks/useAuth';
import * as db from '../../config/firebaseConfig';
import SavedItem from './SavedItem';
import { AuthContext } from '../Context/AuthContext';
let indexTitle = 'My Saved Movies';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function MyList({ route, navigation }) {
	// const { state } = useContext(MovieContext);
	const [movieList, setMovieList] = useState([]);
	// const { state } = useContext(MovieListContext);
	const user = useContext(AuthContext);
	const userId = user.uid;
	console.log(user);
	console.log(userId);
	const getSavedMovieList = async () => {
		try {
			let response = await db.getSavedMovies(userId);
			setMovieList(response);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		getSavedMovieList();
	}, []);
	if (!userId) {
		return <Text>Loading...</Text>;
	}
	return (
		<SafeAreaView style={styles.view}>
			<ImageBackground
				alt='theatre'
				style={{ resizeMode: 'cover', width: '100%', height: windowHeight }}
				source={{
					uri:
						'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
				}}
			>
				<Text style={styles.text}>{indexTitle}</Text>
				<FlatList
					data={movieList}
					keyExtractor={(state) => state.id}
					renderItem={({ item }) => {
						return <SavedItem item={item} userId={userId} />;
					}}
				/>
			</ImageBackground>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	view: {
		// flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: windowHeight,
		// flex: 2,
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
