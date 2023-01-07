import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import CloseIcon from '../assets/icons/xmark.svg';

function ScannerScreen({ navigation, route }) {
	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);

	useEffect(() => {
		const getBarCodeScannerPermissions = async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		};

		getBarCodeScannerPermissions();
	}, []);

	const handleBarCodeScanned = ({ type, data }) => {
		setScanned(true);
		alert(`Bar code with type ${type} and data ${data} has been scanned!`);
	};

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.close} onPress={() => navigation.navigate('Home')}>
				<CloseIcon width={35} height={35} fill={'#fff'} />
			</TouchableOpacity>
			<BarCodeScanner
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				style={[styles.camera]}
			/>
			{scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
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
	camera: {
		width: width,
		height: height,
	},
	close: {
		position: 'absolute',
		top: 40,
		right: 30,
    zIndex: 999,
	},
});

export default ScannerScreen;
