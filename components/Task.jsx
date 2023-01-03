import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useState } from 'react';
import XPIcon from '../assets/icons/angles-up.svg';
import tasks from '../data/tasks.json';

function click(navigation, type) {
	navigation.navigate('Task', { type });
}

export default function Task({ navigation, task }) {
	const [info] = useState(tasks.find((t) => t.name === task));
	return (
		<TouchableOpacity onPress={() => click(navigation, task)}>
			<View style={styles.task}>
				<View>
					<Text style={styles.h1}>{task}</Text>
					{/* <Text style={styles.text}>Drücke 100 Mal auf "Jetzt Leveln"</Text> */}
					<Text style={styles.text}>{info.gameslug}</Text>
				</View>
				<View>
					<XPIcon width={25} height={25} fill={'#FFD70C'} />
					<Text style={styles.xp}>{info.xp}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	task: {
		backgroundColor: '#262626',
		padding: 15,
		marginVertical: 5,
		borderRadius: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	h1: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	text: {
		color: '#fff',
		fontSize: 16,
	},
	xp: {
		color: '#FFD70C',
		fontSize: 16,
		fontWeight: 'bold',
	},
});
