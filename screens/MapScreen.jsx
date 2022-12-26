import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Logo from '../assets/LOGO.svg';
import CloseIcon from '../assets/icons/xmark.svg';
import CameraIcon from '../assets/icons/camera.svg';
import MapView from 'react-native-maps';
import mapStyle from '../data/map-styling.json';

function MapScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			<View>
				<MapView
					style={styles.map}
					customMapStyle={mapStyle}
					initialRegion={{
						latitude: 48.0499319,
						longitude: 8.2107534,
						latitudeDelta: 0.015,
						longitudeDelta: 0.015,
					}}
				/>
				<TouchableOpacity style={styles.close} onPress={() => navigation.navigate('Home')}>
					<CloseIcon width={35} height={35} fill={'#000'} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.camera} onPress={() => navigation.navigate('Home')}>
					<CameraIcon width={35} height={35} fill={'#fff'} />
					<View style={styles.mapbackground}></View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	map: {
		width: width,
		height: height,
	},
	close: {
		position: 'absolute',
		top: 20,
		right: 30,
	},
	camera: {
		position: 'absolute',
		bottom: 50,
		right: 50,
	},
	mapbackground: {
		backgroundColor: '#000',
		width: 60,
		height: 60,
		transform: [{ translateX: -12.5 }, { translateY: -12.5 }],
		position: 'absolute',
		zIndex: -99,
		borderRadius: 100,
	},
});

export default MapScreen;
