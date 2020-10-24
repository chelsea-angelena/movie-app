import 'react-native-gesture-handler';
import React from 'react';
import ModalScreen from '../screens/ModalScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen';
import NomineeMylist from '../screens/NomineeMyList';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

function StackNav() {
	return (
		<Stack.Navigator
			mode='modal'
			screeenOptions={{
				headerShown: false,
				cardStyle: { backgroundColor: 'transparent' },
				cardOverlayEnabled: true,
				cardStyleInterpolator: ({ current: { progress } }) => ({
					cardStyle: {
						opacity: progress.interpolate({
							inputRange: [0, 0.5, 0.9, 1],
							outputRange: [0, 0.25, 0.7, 1],
						}),
					},
					overlayStyle: {
						opacity: progress.interpolate({
							inputRange: [0, 1],
							outputRange: [0, 0.5],
							extrapolate: 'clamp',
						}),
					},
				}),
			}}
		>
			<Stack.Screen
				name='Search'
				component={MainScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='Modal'
				component={ModalScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				options={{ headerShown: false }}
				name='MyList'
				component={NomineeMylist}
			/>
		</Stack.Navigator>
	);
}

export default StackNav;
