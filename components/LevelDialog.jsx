import { StyleSheet, View, Text, Pressable, Dimensions } from 'react-native';
import { useState } from 'react';
import CloseIcon from '../assets/icons/xmark.svg';
import trees from '../data/trees.json';
import Task from '../components/Task';

function click(navigation, type) {
	navigation.navigate('Details', { type });
}

export default function LevelDialog({ navigation, type, setDialog, setLevelDialog }) {
	const [info] = useState(trees.find((t) => t.title === type));

	return (
		<View style={styles.dialog}>
			<View style={styles.header}>
				<Text style={styles.h1}>{type}</Text>
				<Pressable onPress={() => setLevelDialog(false)}>
					<CloseIcon width="30" height="30" fill="#fff" />
				</Pressable>
			</View>
			<View style={styles.header}>
				<Text style={styles.h3}>Level 8</Text>
				<Text style={styles.xp}>1234 XP</Text>
			</View>
			<View style={styles.bar}></View>
			<View style={styles.aufgabencontainer}>
				<Text style={styles.h2}>Aufgaben</Text>
				<View style={styles.aufgaben}>
					{info.tasks ? (
						info.tasks.map((task) => {
							return <Task key={task} task={task} navigation={navigation} />;
						})
					) : (
						<View></View>
					)}
				</View>
			</View>
		</View>
	);
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
	dialog: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		borderRadius: 17,
		margin: 15,
		width: width - 30,
		paddingVertical: 15,
		paddingHorizontal: 20,
		backgroundColor: '#1C1C1C',
		zIndex: 100,
	},
	h1: {
		color: '#fff',
		fontSize: 24,
		fontWeight: 'bold',
	},
	h2: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
	},
	h3: {
		color: '#fff',
		fontSize: 16,
	},
	xp: {
		color: '#FFD70C',
		fontSize: 16,
		fontWeight: 'bold',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 5,
	},
	bar: {
		marginTop: 5,
		marginBottom: 15,
		height: 5,
		borderRadius: 20,
		backgroundColor: '#fff',
	},
	aufgabencontainer: {
		flexDirection: 'column',
	},
	aufgaben: {
		justifyContent: 'center',
	},
});
