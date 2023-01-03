import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import CloseIcon from '../../assets/icons/xmark.svg';
import tasks from '../../data/tasks.json';

const type = 'Jungdurchforstung';

function Jungdurchforstung({ navigation }) {
	const [info] = useState(tasks.find((t) => t.name === type));

	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			<View style={[styles.box, styles.header]}>
				<Text style={[styles.text, styles.h1]}>{type}</Text>
				<TouchableOpacity onPress={() => navigation.navigate('Home')}>
					<CloseIcon width="35" height="35" fill="#fff" />
				</TouchableOpacity>
			</View>
			<FlatGrid
				itemDimension={25}
				data={Array.apply(null, Array(99)).map(function () {})}
				renderItem={({ item }) => {
          const r = Math.random() < 0.6 ? { backgroundColor: '#393226' } : { backgroundColor: '#2C8B29' };
					return <View style={[styles.square, r]} />;
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121212',
		paddingHorizontal: 20,
		paddingVertical: 40,
	},
	header: {
		marginBottom: 10,
	},
	box: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	text: {
		color: '#fff',
		fontSize: 16,
	},
	h1: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	game: {},
	square: {
		width: 35,
		height: 35,
		backgroundColor: '#ff00ff',
		borderRadius: 10,
	},
});

export default Jungdurchforstung;
