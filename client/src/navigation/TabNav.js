import 'react-native-gesture-handler';
import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import StackNav from './StackNav';
// import MyList from '../screens/NomineeMyList';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import StackNav from './StackNav';
import MyList from '../screens/NomineeMyList';
import { Feather } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function TabNav() {
	return (
		<Tab.Navigator
			activeTintColor='blue'
			inactiveTintColor='red'
			barStyle={{
				backgroundColor: 'black',
			}}
			screenOptions={{ headerShown: false }}
			initialRouteName='Search'
			activeColor='white'
			inactiveColor='grey'
		>
			<Tab.Screen
				name='Search'
				component={StackNav}
				options={{
					tabBarLabel: 'Search',
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<Feather name='search' size={26} color='white' />
					),
				}}
			/>
			<Tab.Screen
				name='My List'
				component={MyList}
				options={{
					tabBarLabel: 'My List',
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name='heart' color='white' size={26} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}
