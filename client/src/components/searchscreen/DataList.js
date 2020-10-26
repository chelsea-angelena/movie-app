import React from 'react';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';
import ListItem from './ListItem';
import { useNavigation } from '@react-navigation/native';

const DataList = ({ results }) => {
	const navigation = useNavigation();

	return (
		<View>
			<Text> List Page</Text>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={results}
				keyExtractor={(results) => results.imdbID}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('Modal', {
									imdbID,
									title,
									item,
								})
							}
						>
							<ListItem
								item={item}
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
