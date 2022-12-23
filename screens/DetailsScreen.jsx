import { Dimensions, StyleSheet, Text, View, ScrollView, Pressable, TextInput } from 'react-native';
import { useState } from 'react';
import CloseIcon from '../assets/icons/xmark.svg';
import trees from '../data/trees.json';

export default function DetailsScreen({ navigation, route }) {
	const [type] = useState(route.params.type);
	const [info] = useState(trees.find((t) => t.title === type));

	return (
		<ScrollView style={styles.container}>
			<View style={styles.box}>
				<Text style={[styles.text, styles.h1]}>
					{info.title} ({info.scientific})
				</Text>
				<Pressable onPress={() => navigation.navigate('Home')}>
					<CloseIcon width="35" height="35" fill="#fff" />
				</Pressable>
			</View>
			<View style={styles.box}>
				<View>
					{info.characteristics.map((c) => {
						return (
							<View key={c.title}>
								<Text style={styles.infoheader}>{c.title}</Text>
								<Text style={styles.info}>{c.data}</Text>
							</View>
						);
					})}
				</View>
			</View>
			<View style={styles.textcontainer}>
				{info.text.map((t) => {
					return (
						<View key={t.data}>
							{t.title !== '' && <Text style={styles.title}>{t.title}</Text>}
							<Text style={styles.data}>{t.data}</Text>
						</View>
					);
				})}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121212',
		padding: 30,
	},
	box: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	text: {
		color: '#fff',
	},
	h1: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	infoheader: {
		color: '#fff',
		textAlign: 'right',
		fontSize: 20,
		fontWeight: 'bold',
	},
	info: {
		textAlign: 'right',
		color: '#fff',
		fontSize: 20,
		marginBottom: 20,
	},
	data: {
		color: '#fff',
		fontSize: 16,
		marginBottom: 20,
	},
	title: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
	},
	textcontainer: {
		paddingBottom: 50,
	}
});
