import React, { useState, useContext } from 'react';
import {
	Image,
	Dimensions,
	ImageBackground,
	StyleSheet,
	View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormInput from './FormInput';
import FormButton from './FormButton';
import ErrorMessage from './ErrorMessage';
import * as db from '../../../config/firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Context/AuthContext';
import colors from '../../styles/colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const validationSchema = Yup.object().shape({
	email: Yup.string()
		.label('Email')
		.email('Enter a valid email')
		.required('Please enter a registered email'),
	password: Yup.string()
		.label('Password')
		.required()
		.min(6, 'Password must have at least 6 characters '),
});

const SignInScreen = () => {
	const [submitting, setSubmitting] = useState(false);
	const user = useContext(AuthContext);
	const [error, setError] = useState(null);
	const navigation = useNavigation();
	const goToSignup = () => navigation.navigate('SignUpScreen');

	const handleLogin = async (values) => {
		const { email, password } = values;

		await db.loginWithEmail(email, password);
	};

	return (
		<KeyboardAwareScrollView style={{ backgroundColor: colors.black }}>
			<ImageBackground
				alt='theatre'
				style={{ resizeMode: 'cover', height: windowHeight }}
				source={{
					uri:
						'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
				}}
			>
				{/* <View style={styles.container}> */}
				{/* <Logo /> */}
				<Formik
					initialValues={{ email: '', password: '' }}
					onSubmit={(values) => {
						handleLogin(values);
					}}
					validationSchema={validationSchema}
				>
					{({
						handleChange,
						values,
						handleSubmit,
						errors,
						isValid,
						touched,
						handleBlur,

						isSubmitting,
					}) => (
						<>
							<Image
								source={require('../../../assets/appLogo.png')}
								style={{
									minHeight: 200,
									minWidth: 400,
									alignSelf: 'center',
									marginTop: 64,
								}}
								alt='movie'
							/>
							<View style={styles.innerView}>
								<FormInput
									style={{ color: colors.white }}
									name='email'
									value={values.email}
									onChangeText={handleChange('email')}
									placeholder='Enter email'
									autoCapitalize='none'
									iconName='ios-mail'
									iconColor='#2C384A'
									onBlur={handleBlur('email')}
								/>
								<ErrorMessage errorValue={touched.email && errors.email} />
								<FormInput
									name='password'
									style={{ color: colors.white }}
									value={values.password}
									onChangeText={handleChange('password')}
									placeholder='Enter password'
									secureTextEntry
									iconName='ios-lock'
									iconColor='#2C384A'
									onBlur={handleBlur('password')}
								/>
								<ErrorMessage
									errorValue={touched.password && errors.password}
								/>
								<View style={styles.buttonContainer}>
									<FormButton
										buttonType='outline'
										onPress={handleSubmit}
										title='LOGIN'
										buttonColor={colors.white}
										backgroundColor={colors.red}
										disabled={!isValid || isSubmitting}
									/>
								</View>
								<ErrorMessage errorValue={errors.general} />
							</View>
						</>
					)}
				</Formik>

				<Button
					title="Don't have an account? Sign Up"
					onPress={goToSignup}
					titleStyle={{
						color: colors.white,
					}}
					type='clear'
				/>
				{/* </View> */}
			</ImageBackground>
		</KeyboardAwareScrollView>
	);
};

const styles = StyleSheet.create({
	// container: {
	// 	backgroundColor: colors.grey,
	// 	paddingTop: 15,
	// 	height: 1000,
	// 	marginTop: 64,
	// },
	buttonContainer: {
		margin: 25,
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

export default SignInScreen;
