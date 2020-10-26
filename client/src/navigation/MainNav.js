import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../Context/AuthContext.js';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './TabNav';
// import { navigationRef } from './RootNavigation';
import AuthStack from './AuthStack';

export default function MainNav() {
	const user = useContext(AuthContext);
	return (
		<NavigationContainer>
			{!!user ? <TabNav /> : <AuthStack />}
		</NavigationContainer>
	);
}
