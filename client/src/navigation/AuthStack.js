import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen, SignUpScreen } from '../screens/Auth';
import colors from '../styles/colors';

const Stack = createStackNavigator();

export default function AuthStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='SignInScreen'
				component={SignInScreen}
				headerStyle={{ backgroundColor: colors.grey }}
				options={{ title: 'Sign In', headerTransparent: true }}
			/>
			<Stack.Screen
				name='SignUpScreen'
				component={SignUpScreen}
				headerStyle={{ backgroundColor: colors.grey }}
				options={{ title: 'Sign Up', headerTransparent: true }}
			/>
		</Stack.Navigator>
	);
}
