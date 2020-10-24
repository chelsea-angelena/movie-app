import React from 'react';
import { Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';

const customFonts = {
	Montserrat: require('./assets/fonts/Montserrat.ttf'),
};

export default (props) => {
	const [loaded] = useFonts({ customFonts });

	if (!loaded) {
		return null;
	}

	return [loaded];
};
