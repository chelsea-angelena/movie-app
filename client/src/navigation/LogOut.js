import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { Button } from 'react-native-elements';
import * as db from '../../config/firebaseConfig';

export default function LogOut() {
	return (
		<View>
			<ImageBackground
				alt='theatre'
				style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
				source={{
					uri:
						'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
				}}
			>
				<Button title='Log Out' onPress={() => db.signOut()} />
			</ImageBackground>
			<Text></Text>
		</View>
	);
}
