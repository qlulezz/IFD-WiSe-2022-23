import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Pressable, ToastAndroid } from 'react-native';
import { useState } from 'react';
import BackIcon from '../../assets/icons/arrow-left.svg';
import tasks from '../../data/tasks.json';

const type = 'Altdurchforstung';
let count = 0;

function Altdurchforstung({ navigation }) {
	const [info] = useState(tasks.find((t) => t.name === type));

	count = 0;
	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			<View style={[styles.box, styles.header]}>
				<TouchableOpacity onPress={() => navigation.navigate('Task', { type })}>
					<BackIcon width="35" height="35" fill="#fff" />
				</TouchableOpacity>
			</View>
			<View style={styles.game}>
				{Array.apply(null, Array(15)).map((_, i) => {
					return (
						<View style={styles.row} key={i}>
							{Array.apply(null, Array(8)).map((_, j) => {
								return (
									<View key={j}>
										<Square nav={navigation} xp={info.xp} />
									</View>
								);
							})}
						</View>
					);
				})}
			</View>
		</View>
	);
}

function Square({ nav, xp }) {
	const [opacity, setOpacity] = useState(1);
	const r = Math.random();

	if (r < 0.3) {
		if (opacity === 1) {
			count++;
		}
		return (
			<Pressable
				onPress={() => {
					setOpacity(0);
					checkCount(nav, xp);
				}}
				disabled={!opacity}
				style={[styles.square, { backgroundColor: '#707070', opacity: opacity }]}
			></Pressable>
		);
	}
	return (
		<TouchableOpacity
			onPress={() => {
				ToastAndroid.show('Versuch es noch einmal!', ToastAndroid.SHORT);
				nav.navigate('Task', { type });
			}}
			disabled={!opacity}
			style={[styles.square, { backgroundColor: '#2C8B29', opacity: opacity }]}
		></TouchableOpacity>
	);
}

function checkCount(nav, xp) {
	count--;
	if (count === 0) {
		ToastAndroid.show(`Du hast ${xp} XP erhalten!`, ToastAndroid.SHORT);
		nav.navigate('Home');
	}
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
	game: {
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
	},
	row: {
		flexDirection: 'row',
		marginBottom: 5,
	},
	square: {
		width: 35,
		height: 35,
		backgroundColor: '#ff0000',
		borderRadius: 10,
		marginRight: 5,
	},
});

export default Altdurchforstung;
