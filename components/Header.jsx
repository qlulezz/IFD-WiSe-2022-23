import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Logo from '../assets/LOGO.svg';
import GearIcon from '../assets/icons/gear.svg';

export default function Header({ level, xp, nav }) {
	return (
		<>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => nav.navigate('Inventory')}>
					<Logo width={50} height={50} fill={'#fff'} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => nav.navigate('Settings')}>
					<GearIcon width={35} height={35} fill={'#fff'} />
				</TouchableOpacity>
			</View>
			<View style={styles.info}>
				<View style={styles.box}>
					<Text style={styles.h1}>Dein Wald</Text>
					<View style={styles.innerbox}>
						<Text style={styles.h3}>{xp} XP</Text>
						<Text style={styles.h2}>Level {level}</Text>
					</View>
				</View>
				<View style={styles.bar}></View>
			</View>
		</>
	);
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
	box: {
		width: width - 60,
		flexDirection: 'row',
		alignItems: 'baseline',
		justifyContent: 'space-between',
	},
	innerbox: {
		alignItems: 'baseline',
		flexDirection: 'row',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: width,
		position: 'absolute',
		left: 0,
		top: 10,
		padding: 30,
		zIndex: 99,
	},
	info: {
		justifyContent: 'space-between',
		alignItems: 'center',
		width: width,
		position: 'absolute',
		left: 0,
		top: 80,
		padding: 30,
		zIndex: 99,
	},
	h1: {
		color: '#fff',
		fontSize: 24,
		fontWeight: 'bold',
	},
	h2: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
	},
	h3: {
		color: '#707070',
		fontSize: 16,
		fontWeight: 'bold',
		marginRight: 6,
	},
	bar: {
		width: width - 60,
		height: 5,
		borderRadius: 20,
		backgroundColor: '#fff',
	},
});
