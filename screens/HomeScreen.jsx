import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import { useState } from 'react';

import Tile from '../components/Tile';
import TilePlus from '../components/TilePlus';
import Dialog from '../components/Dialog';
import LevelDialog from '../components/LevelDialog';
import Header from '../components/Header';
import MapIcon from '../assets/icons/map-location-dot.svg';

export default function HomeScreen({ navigation }) {
	const [dialog, setDialog] = useState('');
	const [levelDialog, setLevelDialog] = useState(false);

	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			<Header level={4} xp={273} nav={navigation} />
			<View style={styles.wald}>
				<ReactNativeZoomableView
					maxZoom={3}
					minZoom={0.3}
					zoomStep={0.5}
					initialZoom={1}
					bindToBorders={true}
					panBoundaryPadding={300}
					/* onZoomAfter={this.logOutZoomState} */
					style={styles.tilecontainer}
				>
					<View style={[styles.tilerow]}>
						<TilePlus nav={navigation} />
						<TilePlus nav={navigation} />
						<TilePlus nav={navigation} />
						<TilePlus nav={navigation} />
					</View>
					<View style={[styles.tilerow]}>
						<TilePlus nav={navigation} />
						<Tile setDialog={setDialog} type={'Bergahorn'} />
						<Tile setDialog={setDialog} type={'Rotbuche'} />
						<Tile setDialog={setDialog} type={'Weißtanne'} />
						<TilePlus nav={navigation} />
					</View>
					<View style={[styles.tilerow, styles.rowshift]}>
						<TilePlus nav={navigation} />
						<Tile setDialog={setDialog} type={'Fichte'} />
						<Tile setDialog={setDialog} type={'Birke'} />
						<Tile setDialog={setDialog} type={'Douglasie'} />
						<TilePlus nav={navigation} />
					</View>
					<View style={[styles.tilerow, styles.rowshift]}>
						<TilePlus nav={navigation} />
						<Tile setDialog={setDialog} type={'Esche'} />
						<Tile setDialog={setDialog} type={'Waldkiefer'} />
						<TilePlus nav={navigation} />
					</View>
					<View style={[styles.tilerow, styles.rowshift]}>
						<TilePlus nav={navigation} />
						<TilePlus nav={navigation} />
						<TilePlus nav={navigation} />
					</View>
				</ReactNativeZoomableView>
			</View>
			<TouchableOpacity style={styles.map} onPress={() => navigation.navigate('Map')}>
				<MapIcon style={styles.mapicon} width={50} height={50} fill={'#fff'} />
				<View style={styles.mapbackground}></View>
			</TouchableOpacity>
			{dialog &&
				(levelDialog ? (
					<LevelDialog
						navigation={navigation}
						type={dialog}
						setDialog={setDialog}
						setLevelDialog={setLevelDialog}
					/>
				) : (
					<Dialog
						navigation={navigation}
						type={dialog}
						setDialog={setDialog}
						setLevelDialog={setLevelDialog}
					/>
				))}
		</View>
	);
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121212',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 30,
	},
	wald: {
		flex: 1,
	},
	tilecontainer: {
		width: width,
		height: height,
	},
	tilerow: {
		flexDirection: 'row',
	},
	rowshift: {
		transform: [{ translateX: -130 }],
	},
	map: {
		position: 'absolute',
		right: 0,
		bottom: 0,
		zIndex: 99,
		margin: 50,
	},
	mapbackground: {
		backgroundColor: '#2C8B29',
		width: 80,
		height: 80,
		transform: [{ translateX: -15 }, { translateY: -15 }],
		position: 'absolute',
		zIndex: -99,
		borderRadius: 100,
	},
});
