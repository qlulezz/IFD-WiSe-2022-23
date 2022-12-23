import { StyleSheet, Pressable } from 'react-native';
import TileGraphic from '../assets/vector/Tile.svg';

const styles = StyleSheet.create({
	tile: {
		width: 250,
		height: 200,
		marginHorizontal: 5,
		marginVertical: -30,
	},
});

function click(navigation, type) {
	navigation.navigate('Details', { type });
}

export default function Tile({ setDialog, type }) {
	return (
		<Pressable onPress={() => setDialog(type)}>
			<TileGraphic style={styles.tile} />
		</Pressable>
	);
}
