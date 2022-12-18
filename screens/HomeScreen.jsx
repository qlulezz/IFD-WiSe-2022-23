import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

import Tile from '../components/Tile';
import TilePlus from '../components/TilePlus';
import Header from '../components/Header';
import MapIcon from '../assets/icons/map-location-dot.svg';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			<Header level={4} xp={273} />
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
						<TilePlus />
						<TilePlus />
						<TilePlus />
						<TilePlus />
					</View>
					<View style={[styles.tilerow]}>
						<TilePlus />
						<Tile />
						<Tile />
						<Tile />
						<TilePlus />
					</View>
					<View style={[styles.tilerow, styles.rowshift]}>
						<TilePlus />
						<Tile />
						<Tile />
						<Tile />
						<TilePlus />
					</View>
					<View style={[styles.tilerow, styles.rowshift]}>
						<TilePlus />
						<Tile />
						<Tile />
						<TilePlus />
					</View>
					<View style={[styles.tilerow, styles.rowshift]}>
						<TilePlus />
						<TilePlus />
						<TilePlus />
					</View>
				</ReactNativeZoomableView>
			</View>
			<Pressable style={styles.map}>
				<MapIcon style={styles.mapicon} width={50} height={50} fill={'#fff'} />
				<View style={styles.mapbackground}></View>
			</Pressable>
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
		padding: 30,
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
