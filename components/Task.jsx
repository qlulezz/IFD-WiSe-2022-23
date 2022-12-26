import { StyleSheet, View, Text, Pressable, Dimensions } from 'react-native';
import { useState } from 'react';
import XPIcon from '../assets/icons/angles-up.svg';

export default function Task() {
	return (
		<View style={styles.task}>
			<View>
				<Text style={styles.h1}>Jungbestandspflege</Text>
				<Text style={styles.text}>Drücke 100 Mal auf "Jetzt Leveln"</Text>
			</View>
			<View>
				<XPIcon width={25} height={25} fill={'#FFD70C'} />
        <Text style={styles.xp}>420</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	task: {
		backgroundColor: '#262626',
		padding: 15,
		marginVertical: 5,
		borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
