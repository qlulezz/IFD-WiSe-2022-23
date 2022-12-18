import { StyleSheet, Text } from 'react-native';
import TileGraphic from '../assets/vector/Tile.svg';

const styles = StyleSheet.create({
	tile: {
		width: 250,
    height: 200,
    marginHorizontal: 5,
    marginVertical: -30,
	},
});

export default function Tile() {
	return (
		<>
			<TileGraphic style={styles.tile}/>
		</>
	);
}
