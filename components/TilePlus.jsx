import { StyleSheet, Text } from 'react-native';
import TileGraphic from '../assets/vector/TilePlus.svg';

const styles = StyleSheet.create({
	tile: {
		width: 250,
    height: 200,
    marginHorizontal: 5,
    marginVertical: -30,
	},
});

export default function TilePlus() {
	return (
		<>
			<TileGraphic style={styles.tile}/>
		</>
	);
}
