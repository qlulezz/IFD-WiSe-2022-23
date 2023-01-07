import { StyleSheet, TouchableOpacity, View } from 'react-native';
import TileGraphic from '../assets/vector/Tile.svg';

import Bergahorn from '../assets/vector/trees/Bergahorn.svg';
import Birke from '../assets/vector/trees/Birke.svg';
import Douglasie from '../assets/vector/trees/Douglasie.svg';
import Esche from '../assets/vector/trees/Esche.svg';
import Fichte from '../assets/vector/trees/Fichte.svg';
import Lärche from '../assets/vector/trees/Lärche.svg';
import Rotbuche from '../assets/vector/trees/Rotbuche.svg';
import Spitzahorn from '../assets/vector/trees/Spitzahorn.svg';
import Waldkiefer from '../assets/vector/trees/Waldkiefer.svg';
import Weißtanne from '../assets/vector/trees/Weißtanne.svg';

const styles = StyleSheet.create({
	tile: {
		width: 250,
		height: 200,
		marginHorizontal: 5,
		marginVertical: -30,
	},
	tree: {
		position: 'absolute',
	},
});

export default function Tile({ setDialog, type }) {
	return (
		<TouchableOpacity onPress={() => setDialog(type)}>
			<>
				<TileGraphic style={styles.tile} />
				{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
					return (
						<View style={styles.tree} key={i}>
							{getTree(type)}
						</View>
					);
				})}
			</>
		</TouchableOpacity>
	);
}

function getTree(type) {
	let r = {
		left: random(20, 200),
		top: random(-30, 25),
	};

	switch (type) {
		case 'Bergahorn': {
			return <Bergahorn style={r} />;
		}
		case 'Birke': {
			return <Birke style={r} />;
		}
		case 'Douglasie': {
			return <Douglasie style={r} />;
		}
		case 'Esche': {
			return <Esche style={r} />;
		}
		case 'Fichte': {
			return <Fichte style={r} />;
		}
		case 'Lärche': {
			return <Lärche style={r} />;
		}
		case 'Rotbuche': {
			return <Rotbuche style={r} />;
		}
		case 'Spitzahorn': {
			return <Spitzahorn style={r} />;
		}
		case 'Waldkiefer': {
			return <Waldkiefer style={r} />;
		}
		case 'Weißtanne': {
			return <Weißtanne style={r} />;
		}
	}
}

function random(min, max) {
	return Math.random() * (max - min) + min;
}
