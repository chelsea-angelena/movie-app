import React from 'react';
import {
	TouchableOpacity,
	SafeAreaView,
	View,
	Text,
	FlatList,
} from 'react-native';
import ListItem from './ListItem';
import { useNavigation } from '@react-navigation/native';

const DataList = ({ results }) => {
	const navigation = useNavigation();
	let DATA = results;
	return (
		<View>
			<Text> List Page</Text>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={DATA}
				keyExtractor={(item) => item.imdbId}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('Modal', {
									id,
									title,
									item,
								})
							}
						>
							<ListItem
								item={item}
								result={item}
								id={item.imdbID}
								title={item.Title}
								year={item.Year}
								imageUri={item.Poster}
							/>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

export default DataList;
