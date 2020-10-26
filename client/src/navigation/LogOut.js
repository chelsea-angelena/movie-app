import React from 'react';
import {
	StyleSheet,
	Dimensions,
	View,
	ImageBackground,
	Text,
} from 'react-native';
import FormButton from '../screens/Auth/FormButton';
import * as db from '../../config/firebaseConfig';
import AppText from '../components/Text';
import colors from '../styles/colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const goodByeText = {
	text: 'Thanks for using the Movie-App!',
};

export default function LogOut() {
	return (
		<ImageBackground
			alt='theatre'
			style={{ resizeMode: 'cover', height: windowHeight }}
			source={{
				uri:
					'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
			}}
		>
			<View style={styles.innerView}>
				<AppText style={styles.goodbye}>{goodByeText.text}</AppText>
				<FormButton
					buttonType='outline'
					title='Log Out'
					onPress={() => db.signOut()}
					buttonColor={colors.white}
					backgroundColor={colors.red}
				/>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	goodbye: {
		color: colors.white,
		fontSize: 40,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 64,
		marginBottom: 64,
	},
	innerView: {
		maxWidth: 500,
		minWidth: 320,
		width: '100%',
		flex: 1,
		alignSelf: 'center',
		backgroundColor: 'rgba(0,0,0,.5)',
		padding: 32,
	},
});
