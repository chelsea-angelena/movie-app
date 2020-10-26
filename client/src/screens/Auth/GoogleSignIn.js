// import 'react-native-gesture-handler';
// import React from 'react';
// import * as Google from 'expo-google-app-auth';
// import { TouchableOpacity, StyleSheet, Button, View, Text } from 'react-native';
// import * as db from '../../../config/firebaseConfig';
// import { useNavigation } from '@react-navigation/native';
// import { FontAwesome } from '@expo/vector-icons';
// import { config } from '../../../config/googleConfig';

// export default function GoogleButton() {
// 	const signInWithGoogleAsync = async () => {
// 		await db.signInWithGoogle();
// 	};
// 	return (
// 		<View>
// 			<TouchableOpacity onPress={signInWithGoogleAsync} style={styles.google}>
// 				<View style={styles.iconDiv}>
// 					<FontAwesome
// 						style={styles.icon}
// 						name='google'
// 						size={32}
// 						color='white'
// 					/>
// 				</View>
// 				<View>
// 					<Text style={styles.text}>Sign In With Google </Text>
// 				</View>
// 			</TouchableOpacity>
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	google: {
// 		backgroundColor: '#263238',
// 		height: 54,
// 		width: '100%',
// 		marginRight: 16,
// 		marginLeft: 16,
// 		display: 'flex',
// 		flexDirection: 'row',
// 		alignSelf: 'center',
// 		alignItems: 'center',
// 		justifyContent: 'flex-start',
// 		borderRadius: 8,
// 		marginTop: 24,
// 	},
// 	iconDiv: {
// 		borderColor: 'white',
// 		borderWidth: 2,
// 	},
// 	icon: {
// 		padding: 12,
// 		height: 54,
// 	},
// 	text: {
// 		alignSelf: 'center',
// 		fontSize: 16,
// 		color: 'white',
// 		fontWeight: 'bold',
// 		// justifyContent: 'center',
// 		marginLeft: 32,
// 	},
// });
