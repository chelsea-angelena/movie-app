import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './src/navigation/TabNav';
import { navigationRef } from './RootNavigation';
import { Provider as MovieProvider } from './src/Context/MovieContext';
import { Platform } from 'react-native';
import { Button, colors, ThemeProvider } from 'react-native-elements';
import theme from './theme.js';
import { useColorScheme } from 'react-native-appearance';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import AuthStack from './src/navigation/AuthStack';
import * as db from './config/firebaseConfig';
import useAuth from './src/hooks/useAuth';

const customFonts = {
	'Montserrat-Light': require('./assets/Montserrat/Montserrat-Light.ttf'),
};

export const UserContext = React.createContext();

function App() {
	let [user, loading] = useAuth();
	let [fontsLoaded] = useFonts({
		'Montserrat-Light': require('./assets/Montserrat/Montserrat-Light.ttf'),
	});
	let colorScheme = useColorScheme();
	if (!fontsLoaded) {
		return <AppLoading />;
	}
	if (loading) {
		return null;
	}
	return (
		<>
			<UserContext.Provider user={user}>
				<ThemeProvider useDark={colorScheme === 'dark'}>
					<MovieProvider>
						<NavigationContainer ref={navigationRef}>
							{!user ? <AuthStack /> : <TabNav user={user} />}
						</NavigationContainer>
					</MovieProvider>
				</ThemeProvider>
			</UserContext.Provider>
		</>
	);
}
export default App;

// const Stack = createStackNavigator();

// const StackNav = () => {
// 	return (
// 		<>
// 			<Stack.Navigator>
// 				<Stack.Screen name='Search' component={MySearchBar} />
// 				<Stack.Screen name='Results' component={ResultList} />
// 			</Stack.Navigator>
// 		</>
// 	);
// };
// const TabNav = () => {
// 	return (

// 	)
// }
