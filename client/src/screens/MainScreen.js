import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, View } from 'react-native';
import MySearchBar from './SearchBarTwo';

export default function MainScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.view}>
				<MySearchBar />
				<ImageBackground
					alt='theatre'
					style={{ resizeMode: 'cover' }}
					source={{
						uri:
							'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
					}}
				></ImageBackground>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	view: {
		marginTop: 40,
	},
	container: {
		backgroundColor: 'black',
	},
});
