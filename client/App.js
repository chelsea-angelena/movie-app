import React, { useContext, useState, useEffect } from 'react';
import { Provider as MovieProvider } from './src/Context/MovieContext';
import { AuthProvider } from './src/Context/AuthContext';
import { AuthContext } from './src/Context/AuthContext';
import { Provider as MovieListProvider } from './src/Context/MovieListContext';
// import { Platform } from 'react-native';
import { Button, colors, ThemeProvider } from 'react-native-elements';
import { Text } from 'react-native';
import theme from './theme.js';
import { useColorScheme } from 'react-native-appearance';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import MainNav from './src/navigation/MainNav';
import * as db from './config/firebaseConfig';
import useAuth from './src/hooks/useAuth';

const customFonts = {
	'Montserrat-Light': require('./assets/Montserrat/Montserrat-Light.ttf'),
};

function App() {
	
	let [fontsLoaded] = useFonts({
		'Montserrat-Light': require('./assets/Montserrat/Montserrat-Light.ttf'),
	});
	let colorScheme = useColorScheme();

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<>
			<AuthProvider>
				<ThemeProvider useDark={colorScheme === 'dark'}>
					<MovieProvider>
						<MovieListProvider>
							<MainNav />
						</MovieListProvider>
					</MovieProvider>
				</ThemeProvider>
			</AuthProvider>
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
