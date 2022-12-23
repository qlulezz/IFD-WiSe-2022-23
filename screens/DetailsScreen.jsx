import {
	Dimensions,
	StyleSheet,
	Text,
	View,
	ScrollView,
	Pressable,
	TextInput,
	Image,
} from 'react-native';
import { useState } from 'react';
import CloseIcon from '../assets/icons/xmark.svg';
import trees from '../data/trees.json';

export default function DetailsScreen({ navigation, route }) {
	const [type] = useState(route.params.type);
	const [info] = useState(trees.find((t) => t.title === type));

	return (
		<ScrollView style={styles.container}>
			<View style={[styles.box, styles.header]}>
				<Text style={[styles.text, styles.h1]}>
					{info.title} ({info.scientific})
				</Text>
				<Pressable onPress={() => navigation.navigate('Home')}>
					<CloseIcon width="35" height="35" fill="#fff" />
				</Pressable>
			</View>
			<View style={styles.box}>
				<View style={styles.boxImageContainer}>
					<Image
						style={styles.boximage}
						source={imageList[`${info.title.toLocaleLowerCase()}_baum`]}
					/>
				</View>
				<View>
					{info.characteristics.map((c) => {
						return (
							<View key={c.title}>
								<Text style={styles.infoheader}>{c.title}</Text>
								<Text style={styles.info}>{c.data}</Text>
							</View>
						);
					})}
				</View>
			</View>
			<View style={styles.textcontainer}>
				{info.text.map((t) => {
					if (t.title === 'img') {
						return (
							<View key={t.data}>
								<Image style={styles.textimage} source={imageList[`${t.data}`]} />
							</View>
						);
					} else {
						return (
							<View key={t.data}>
								{t.title !== '' && <Text style={styles.title}>{t.title}</Text>}
								<Text style={styles.data}>{t.data}</Text>
							</View>
						);
					}
				})}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121212',
		paddingHorizontal: 20,
		paddingVertical: 40,
	},
	header: {
		marginBottom: 10,
	},
	box: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	text: {
		color: '#fff',
	},
	h1: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	infoheader: {
		color: '#fff',
		textAlign: 'right',
		fontSize: 20,
		fontWeight: 'bold',
	},
	info: {
		textAlign: 'right',
		color: '#fff',
		fontSize: 16,
		marginBottom: 20,
	},
	data: {
		color: '#fff',
		fontSize: 16,
		marginBottom: 20,
	},
	title: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 10,
	},
	textcontainer: {
		paddingBottom: 50,
	},
	boxImageContainer: {
		flex: 1,
		height: '100%',
		marginRight: 30,
		paddingBottom: 10,
	},
	boximage: {
		flex: 1,
		height: '100%',
		width: "100%",
		resizeMode: 'cover',
		borderRadius: 10,
	},
	textimage: {
		width: '100%',
		height: 190,
		resizeMode: 'cover',
		borderRadius: 10,
	},
});

const imageList = {
	bergahorn_baum: require('../assets/images/trees/bergahorn_baum.jpg'),
	bergahorn_holz: require('../assets/images/trees/bergahorn_holz.jpg'),
	bergahorn_zweige: require('../assets/images/trees/bergahorn_zweige.jpg'),
	birke_baum: require('../assets/images/trees/birke_baum.jpg'),
	birke_holz: require('../assets/images/trees/birke_holz.jpg'),
	birke_zweige: require('../assets/images/trees/birke_zweige.jpg'),
	douglasie_baum: require('../assets/images/trees/douglasie_baum.jpg'),
	douglasie_holz: require('../assets/images/trees/douglasie_holz.jpg'),
	douglasie_zweige: require('../assets/images/trees/douglasie_zweige.jpg'),
	esche_baum: require('../assets/images/trees/esche_baum.jpg'),
	esche_holz: require('../assets/images/trees/esche_holz.jpg'),
	esche_zweige: require('../assets/images/trees/esche_zweige.jpg'),
	fichte_baum: require('../assets/images/trees/fichte_baum.jpg'),
	fichte_holz: require('../assets/images/trees/fichte_holz.jpg'),
	fichte_zweige: require('../assets/images/trees/fichte_zweige.jpg'),
	lärche_baum: require('../assets/images/trees/laerche_baum.jpg'),
	lärche_holz: require('../assets/images/trees/laerche_holz.jpg'),
	lärche_zweige: require('../assets/images/trees/laerche_zweige.jpg'),
	rotbuche_baum: require('../assets/images/trees/rotbuche_baum.jpg'),
	rotbuche_holz: require('../assets/images/trees/rotbuche_holz.jpg'),
	rotbuche_zweige: require('../assets/images/trees/rotbuche_zweige.jpg'),
	spitzahorn_baum: require('../assets/images/trees/spitzahorn_baum.jpg'),
	spitzahorn_holz: require('../assets/images/trees/spitzahorn_holz.jpg'),
	spitzahorn_zweige: require('../assets/images/trees/spitzahorn_zweige.jpg'),
	waldkiefer_baum: require('../assets/images/trees/waldkiefer_baum.jpg'),
	waldkiefer_holz: require('../assets/images/trees/waldkiefer_holz.jpg'),
	waldkiefer_zweige: require('../assets/images/trees/waldkiefer_zweige.jpg'),
	weißtanne_baum: require('../assets/images/trees/weisstanne_baum.jpg'),
	weißtanne_holz: require('../assets/images/trees/weisstanne_holz.jpg'),
	weißtanne_zweige: require('../assets/images/trees/weisstanne_zweige.jpg'),
};
