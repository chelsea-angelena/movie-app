import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import {
	TouchableOpacity,
	SafeAreaView,
	View,
	Text,
	FlatList,
} from 'react-native';
import ListItem from './ListItem';
import { useNavigation } from '@react-navigation/native';
import colors from '../../styles/colors';

const DataList = ({ results }) => {
	const navigation = useNavigation();
	const user = useContext(AuthContext);
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
