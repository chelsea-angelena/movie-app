import React, { useState, useEffect, useContext } from 'react';
import {
	Alert,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	View,
	ScrollView,
} from 'react-native';
import { Button, Text, Card, Image } from 'react-native-elements';
import { Dimensions } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import NomineeMyList from './NomineeMyList';
import { Context as MovieContext } from '../Context/MovieContext';
import { API_KEY } from '../../env';
import colors from '../style/colors';
import { UserContext } from '../Context/UserContext';
import useAuth from '../hooks/useAuth';
import * as db from '../../config/firebaseConfig';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

function ModalScreen(props, { route }) {
	const [user] = useAuth();
	const [value, setValue] = useState('');
	const [result, setResult] = useState(null);
	const [movie, setMovie] = useState({});
	const [loading, setLoading] = useState(true);
	const [button, setButton] = useState(true);
	const { state, addMovie } = useContext(MovieContext);
	let navigation = useNavigation();

	const id = props.route.params;
	console.log(id, 'id');
	const userId = user.uid;
	let imdbID = id.movieItemId.id;
	console.log(imdbID);
	let movieId = id.movieItemId.id;
	console.log(movieId, 'Id');
	const getResult = async (imdbID) => {
		const response = await axios.get(
			`http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`
		);
		console.log(response);
		setResult(response.data);
		setMovie({
			imageUri: response.data.Poster,
			title: response.data.Title,
			id: imdbID,
		});
		setLoading(false);
	};

	useEffect(() => {
		getResult(imdbID);
	}, []);
	if (!result) {
		return null;
	}
let data = result
	// const submitButton = () => {
	// 	state.filter((movie) => movie.id === imdbId)
	// 		? setButton(false)
	// 		: setButton(true);
	// };

	// const onAddMovie = ({ listItem }) => {
	// 	addMovie({ listItem });
	// 	console.log(listItem);
	// };

	// const onAddMovie = ({ imdbID }) => {
	// 	addMovie(imdbID);
	// 	// navigation.navigate('List');
	// };
	// const dispatch = useDispatch();
	// const onSave = (value) => {
	// 	dispatch(setMovie(value));
	// };

	const onAddMovie = async () => {
		await db.saveMovie(imdbID, movie, userId);
		await addMovie(movie);
		setButton(false);
		navigation.navigate('MyList', NomineeMyList);
	};
	if (!user && !imdbID) {
		return <Text>loading...</Text>;
	}
	if (loading) {
		return null;
	} else {
		return (
			<ScrollView>
				<View style={styles.view}>
					<Card
						wrapperStyle={{ color: colors.white }}
						containerStyle={{ backgroundColor: colors.grey }}
					>
						<Card.Image
							source={{ uri: data.Poster }}
							alt=''
							resizeMode='cover'
							style={styles.image}
						/>
						<Card.Title>{data.Title}</Card.Title>
						<Card.Divider />
						<View style={styles.container}>
							<Text style={styles.h4}>{data.Year}</Text>
							<Text style={styles.boldText}>Actors: </Text>
							<Text style={styles.h4}>{data.Actors}</Text>
							<Text style={styles.boldText}>Actors: </Text>
							<Text style={styles.h4}>{data.Awards}</Text>
							<Text style={styles.boldText}>Box-Office: </Text>
							<Text style={styles.h4}>{data.BoxOffice}</Text>
							<Text style={styles.boldText}>Director: </Text>
							<Text style={styles.h4}>{data.Director}</Text>
							<Text style={styles.boldText}>Genre: </Text>
							<Text style={styles.h4}>{data.Genre}</Text>
							<Text style={styles.boldText}>Plot: </Text>
							<Text style={styles.h4}>{data.Plot}</Text>
							<Text style={styles.boldText}>Rated: </Text>
							<Text style={styles.h4}>{data.Rated}</Text>
							{data.Website === true ? (
								<Text style={styles.h4}>{data.Website}</Text>
							) : null}
							<Text style={styles.boldText}>Plot: </Text>
							<Text style={styles.h4}>imdb rating: {data.imdbRating}</Text>
						</View>
					</Card>
				</View>

				<View style={styles.buttonContainer}>
					{!button ? (
						<Button
							buttonStyle={styles.button}
							title='Already Selected'
							onPress={() => Alert.alert('already Nominated')}
						/>
					) : (
						<Button
							title='Select'
							buttonStyle={styles.button}
							onPress={onAddMovie}
						/>
					)}
				</View>
			</ScrollView>
		);
	}
}
const styles = StyleSheet.create({
	image: {
		width: 'auto',
		padding: 10,
		height: 500,
	},
	card: {
		width: screenWidth,
	},
	view: {
		flex: 1,
	},
	h4: {
		fontSize: 14,
		lineHeight: 14 * 1.5,
		color: colors.white,
	},
	container: {
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 16,
	},
	boldText: {
		fontWeight: 'bold',
		color: colors.white,
	},
	buttonContainer: {
		margin: 16,
	},

	button: {
		color: 'white',
		backgroundColor: 'hsl(210, 4%, 29%)',
		marginLeft: 24,
		marginRight: 24,
	},
	text: {
		color: 'white',
		padding: 2.5,
	},
});

// const mapStateToProps = (state) => ({
// 	movies: state.movie,
// });
// ModalScreen.propTypes = {
// 	setMovie: PropTypes.func.isRequired,
// };
// export default connect(mapStateToProps)(Movie);
export default ModalScreen;
