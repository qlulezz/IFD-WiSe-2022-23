import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Logo from '../assets/LOGO.svg';
import { useState } from 'react';

export default function RegisterScreen({ navigation }) {
	const [email, onChangeEmail] = useState(null);
	const [name, onChangeName] = useState(null);
	const [password, onChangePassword] = useState(null);

	function register() {
		navigation.navigate('Home');
	}

	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			<Logo width={200} height={200} fill={'#fff'} />
			<Text style={[styles.text, styles.h1]}>Konto erstellen</Text>
			<View>
				<TextInput
					style={styles.input}
					onChangeText={onChangeEmail}
					value={email}
					placeholder="E-Mail"
					placeholderTextColor="#707070"
					keyboardType="email-address"
				/>
				<TextInput
					style={styles.input}
					onChangeText={onChangeName}
					value={name}
					placeholder="Name"
					placeholderTextColor="#707070"
					keyboardType="text"
				/>
				<TextInput
					style={styles.input}
					onChangeText={onChangePassword}
					value={password}
					placeholder="Passwort"
					placeholderTextColor="#707070"
					keyboardType="visible-password"
				/>
			</View>
			<View style={styles.btnContainer}>
				<Text style={styles.text}>
					Durch deine Registrierung stimmst du unseren AGB und Datenschutzrichtlinien und unserer
					Cookie-Nutzung zu. Explorester kann deine Kontaktinformationen, einschl. deiner
					E-Mail-Adresse, für Zwecke nutzen, die in unseren Datenschutzrichtlinien beschrieben sind.
				</Text>
				<TouchableOpacity onPress={register}>
					<Text style={[styles.text, styles.btn]}>Registrieren</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		width: 320,
		height: 55,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderColor: '#707070',
		borderWidth: 2,
		paddingLeft: 20,
		fontSize: 18,
		borderRadius: 10,
		color: '#fff',
	},
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 30,
	},
	text: {
		color: '#fff',
	},
	h1: {
		fontSize: 32,
		fontWeight: 'bold',
	},
	btnContainer: {
		marginVertical: 10,
	},
	btn: {
		backgroundColor: '#2C8B29',
		borderRadius: 50,
		paddingHorizontal: 50,
		paddingVertical: 5,
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		marginVertical: 20,
	},
});
