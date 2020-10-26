import React from 'react';
import { Provider as MovieProvider } from './src/Context/MovieContext';
import { AuthProvider } from './src/Context/AuthContext';
import { ThemeProvider } from 'react-native-elements';
import { useColorScheme } from 'react-native-appearance';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import MainNav from './src/navigation/MainNav';

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
						{/* <MovieListProvider> */}
						<MainNav />
						{/* </MovieListProvider> */}
					</MovieProvider>
				</ThemeProvider>
			</AuthProvider>
		</>
	);
}
export default App;
