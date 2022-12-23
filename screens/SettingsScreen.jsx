import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';
import Logo from '../assets/LOGO.svg';
import CloseIcon from '../assets/icons/xmark.svg';

function SettingsScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			<View style={styles.header}>
				<Logo width={50} height={50} fill={'#fff'} />
				<Pressable onPress={() => navigation.navigate('Home')}>
					<CloseIcon width={35} height={35} fill={'#fff'} />
				</Pressable>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.h1}>Einstellungen</Text>
				<View>
					<Text style={styles.setting}>Account</Text>
					<Text style={styles.setting}>Benachrichtigungen</Text>
					<Text style={styles.setting}>Design</Text>
					<Text style={styles.setting}>Bedienungshilfe</Text>
					<Text style={styles.setting}>Über Explorester</Text>
				</View>
			</View>
			<View style={styles.footer}>
				<Text style={styles.text}>Interface Design - Wintersemester 2022/23</Text>
			</View>
		</View>
	);
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121212',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#fff',
	},
	setting: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 18,
		marginVertical: 5,
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
	h1: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 15,
	},
	logo: {
		width: 100,
		height: 100,
	},
	textContainer: {
		flex: 1,
		marginVertical: 100,
		width: width,
		padding: 30,
	},
	footer: {
		marginVertical: 30,
	},
});

export default SettingsScreen;
