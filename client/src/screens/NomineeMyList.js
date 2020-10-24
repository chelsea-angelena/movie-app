import React, { useState, useContext } from 'react';
import { Image, Button, Text, Card } from 'react-native-elements';
import {
	SafeAreaView,
	ScrollView,
	View,
	TouchableOpacity,
	StyleSheet,
	FlatList,
} from 'react-native';
import { Context as MovieContext } from '../Context/MovieContext';

let indexTitle = 'My Saved Movies';

export default function MyList() {
	const { state } = useContext(MovieContext);
	console.log(state, 'state of movie in list');
	return (
		<SafeAreaView style={styles.view}>
			<Text style={styles.text}>{indexTitle}</Text>
			<FlatList
				data={state}
				keyExtractor={(id) => id}
				renderItem={({ item }) => {
					return (
						<ListItem
							item={item}
							title={item.title}
							id={item.id}
							imageUri={item.imageUri}
							// chevron
						/>
						// 	{/* <Text>{item.title}</Text>
						// 	<Image
						// 		source={{ uri: item.imageUri }}
						// 		style={{ width: 200, height: 200 }}
						// 		alt=''
						// 	/> */}
						// // </>
					);
				}}
			/>
		</SafeAreaView>
	);
}

const ListItem = ({ title, imageUri, id }) => {
	console.log(title, imageUri, id);
	return (
		<View style={styles.view}>
			<Text style={styles.text}>{title}</Text>
			<Image source={{ uri: imageUri }} alt='' style={styles.image} />
		</View>
	);
};

const styles = StyleSheet.create({
	view: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		flex: 2,
		backgroundColor: 'black',
	},
	text: {
		color: 'white',
		fontSize: 24,
	},
	image: {
		width: 300,
		height: 200,
	},
	wrap: {
		width: '100%',
	},
});
