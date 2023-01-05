import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import CloseIcon from '../assets/icons/xmark.svg';
import trees from '../data/trees.json';

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

function InventoryScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			<View style={[styles.box, styles.header]}>
				<Text style={[styles.text, styles.h1]}>Inventar</Text>
				<TouchableOpacity onPress={() => navigation.navigate('Home')}>
					<CloseIcon width="35" height="35" fill="#fff" />
				</TouchableOpacity>
			</View>
			<FlatGrid
				itemDimension={120}
				spacing={25}
				data={trees}
				renderItem={({ item }) => {
					const r = random(1, 9);
					return (
						<TouchableOpacity
							onPress={() => navigation.navigate('Home')}
							style={[styles.treecontainer, { borderColor: getBorderColor(r) }]}
						>
							<View style={styles.tree}>{getTree(item.title)}</View>
							<View style={styles.info}>
								<Text style={styles.text}>{item.title}</Text>
								<Text style={styles.text}>Lvl {r}</Text>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121212',
		paddingTop: 40,
	},
	header: {
		paddingHorizontal: 20,
		marginBottom: 10,
	},
	box: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	text: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 16,
	},
	h1: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	treecontainer: {
		backgroundColor: '#262626',
		borderWidth: 3,
		width: 145,
		height: 145,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 7,
	},
	info: {
		width: '100%',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	tree: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

function getBorderColor(lvl) {
	switch (lvl) {
		case 1: {
			return '#26392F';
		}
		case 2: {
			return '#2C8B29';
		}
		case 3: {
			return '#9BCC31';
		}
		case 4: {
			return '#CD7F32';
		}
		case 5: {
			return '#CC3131';
		}
		case 6: {
			return '#D21D7D';
		}
		case 7: {
			return '#315FCC';
		}
		case 8: {
			return '#fff';
		}
	}
}

function getTree(type) {
	switch (type) {
		case 'Bergahorn': {
			return <Bergahorn />;
		}
		case 'Birke': {
			return <Birke />;
		}
		case 'Douglasie': {
			return <Douglasie />;
		}
		case 'Esche': {
			return <Esche />;
		}
		case 'Fichte': {
			return <Fichte />;
		}
		case 'Lärche': {
			return <Lärche />;
		}
		case 'Rotbuche': {
			return <Rotbuche />;
		}
		case 'Spitzahorn': {
			return <Spitzahorn />;
		}
		case 'Waldkiefer': {
			return <Waldkiefer />;
		}
		case 'Weißtanne': {
			return <Weißtanne />;
		}
	}
}

function random(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

export default InventoryScreen;
