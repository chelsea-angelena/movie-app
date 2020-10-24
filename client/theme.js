import { Button, colors, ThemeProvider } from 'react-native-elements';
import { useColorScheme } from 'react-native-appearance';

const theme = {
	Button: {
		raised: true,
	},
	colors: {
		primary: '#303F9F',
		secondary: '#536DFE',
		white: '#FFEBEE',
		black: '#263238',
		grey0: '#B0BEC5',
		grey1: '#90A4AE',
		grey2: '#78909C',
		grey3: '#607D8B',
		grey4: '#546E7A',
		grey5: '#455A64',
		greyOutline: '#78909C',
		searchBg: '#9FA8DA',
		success: '#1A237E',
		error: '#E65100',
		warning: '#880E4F',
		divider: '#607D8B',
		platform: {
			ios: {
				primary: '#1A237E',
				secondary: '#3949AB',
				grey: '#90A4AE',
				searchBg: '#4FC3F7',
				success: '#1A237E',
				error: '#E65100',
				warning: '#880E4F',
			},
		},
	},
};
export default theme;
