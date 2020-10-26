import React, { useState, useEffect, useContext } from 'react';
import { Alert, StyleSheet, View, Text, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { Dimensions } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { API_KEY } from '../../env';
import colors from '../style/colors';
import { AuthContext } from '../Context/AuthContext';
import * as db from '../../config/firebaseConfig';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

function ModalScreen(props, { route }) {
	const user = useContext(AuthContext);
	const [result, setResult] = useState(null);
	const [movie, setMovie] = useState({});
	const [loading, setLoading] = useState(true);
	const [button, setButton] = useState(true);
	const navigation = useNavigation();
	const id = props.route.params;
	const userId = user.uid;
	let imdbID = id.movieItemId;
	// let movieId = id.movieItemId.id;

	const getResult = async (imdbID) => {
		const response = await axios.get(
			`http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`
		);
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
	let data = result;
	const onAddMovie = async () => {
		await db.saveMovie(imdbID, movie, userId);
		setButton(false);
		navigation.navigate('MyList');
	};
	if (!user && !imdbID) {
		return <Text>loading...</Text>;
	}
	if (!movie || loading) {
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
							style={styles.button}
							title='Already Selected'
							onPress={() => Alert.alert('already Nominated')}
						/>
					) : (
						<Button title='Select' style={styles.button} onPress={onAddMovie} />
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
