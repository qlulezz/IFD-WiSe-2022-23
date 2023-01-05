import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import CloseIcon from '../assets/icons/xmark.svg';
import XPIcon from '../assets/icons/angles-up.svg';
import StartIcon from '../assets/icons/arrow-right.svg';
import tasks from '../data/tasks.json';

function TaskScreen({ navigation, route }) {
	const [type] = useState(route.params.type);
	const [info] = useState(tasks.find((t) => t.name === type));

	return (
		<>
			<View style={styles.container}>
				<StatusBar style="light" />
				<View style={[styles.box, styles.header]}>
					<Text style={[styles.text, styles.h1]}>{type}</Text>
					<TouchableOpacity onPress={() => navigation.navigate('Home')}>
						<CloseIcon width="35" height="35" fill="#fff" />
					</TouchableOpacity>
				</View>
				<Text style={[styles.text, styles.header]}>{info.description}</Text>
				<View>
					<Text style={[styles.text, styles.h1]}>Minigame</Text>
					<View style={[styles.header, styles.taskcontainer]}>
						<Text style={styles.text}>Erfülle folgende Aufgabe für</Text>
						<View style={styles.xpcontainer}>
							<XPIcon width={25} height={25} fill={'#FFD70C'} />
							<Text style={styles.xp}>{info.xp}</Text>
						</View>
					</View>
					<View>
						<Text style={styles.text}>{info.gamedesc}</Text>
					</View>
				</View>
			</View>
			<View style={styles.btncontainer}>
				<TouchableOpacity onPress={() => navigation.navigate(type)} style={[styles.btn]}>
					<Text style={styles.btntext}>Aufgabe starten</Text>
					<StartIcon width="25" height="25" fill="#000" />
				</TouchableOpacity>
			</View>
		</>
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
	taskcontainer: {
		flexDirection: 'row',
	},
	xpcontainer: {
		flexDirection: 'row',
		marginLeft: 5,
	},
	xp: {
		color: '#FFD70C',
		fontSize: 16,
		fontWeight: 'bold',
	},
	btncontainer: {
		flex: 1,
		backgroundColor: '#121212',
		justifyContent: 'flex-end',
		alignItems: "center",
		paddingBottom: 50,
	},
	btn: {
		backgroundColor: '#FFD70C',
		borderRadius: 50,
		paddingVertical: 5,
		paddingHorizontal: 15,
		textAlign: 'center',
		flexDirection: "row",
		alignItems: "center",
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	btntext: {
		fontSize: 22,
		fontWeight: 'bold',
		marginRight: 10,
	},
});

export default TaskScreen;
