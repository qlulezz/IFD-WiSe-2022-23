import { StyleSheet, View, Text, Pressable, Dimensions } from 'react-native';
import { useState } from 'react';
import CloseIcon from '../assets/icons/xmark.svg';
import InfoIcon from '../assets/icons/circle-info.svg';
import trees from '../data/trees.json';

function click(navigation, type) {
	navigation.navigate('Details', { type });
}

export default function Dialog({ navigation, type, setDialog }) {
	const [info] = useState(trees.find((t) => t.title === type));

	return (
		<View style={styles.dialog}>
			<View style={styles.header}>
				<Text style={styles.h1}>{type}</Text>
				<Pressable onPress={() => setDialog("")}>
					<CloseIcon width="30" height="30" fill="#fff" />
				</Pressable>
			</View>
			<View style={styles.header}>
				<Text style={styles.h2}>Level 8</Text>
				<Text style={styles.xp}>1234 XP</Text>
			</View>
			<View style={styles.bar}></View>
			<View style={styles.header}>
				<Pressable /* onPress={() => click(navigation, type)} */>
					<View style={styles.btn}>
						<Text style={styles.btnText}>Leveln</Text>
					</View>
				</Pressable>
				<Pressable onPress={() => click(navigation, type)}>
					<InfoIcon width="40" height="40" fill="#FFD70C" />
				</Pressable>
			</View>
			<View>
				<Text style={styles.preview}>{info.preview}</Text>
			</View>
		</View>
	);
}

const { width, height } = Dimensions.get('window');
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
	btn: {
		backgroundColor: '#FFD70C',
		padding: 8,
		width: 120,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100,
	},
	btnText: {
		fontWeight: 'bold',
		fontSize: 18,
	},
	preview: {
		color: '#fff',
		marginTop: 10,
	},
});
