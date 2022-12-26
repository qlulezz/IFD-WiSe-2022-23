import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Logo from "../assets/LOGO.svg";

function StartScreen({ navigation }) {
  function getStarted() {
    console.log("Get Started!!!");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Logo width={300} height={300} fill={"#fff"} />
      <Text style={[styles.text, styles.h1]}>Explorester</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")} >
          <Text style={[styles.text, styles.btn]}>Registrieren</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={getStarted} >
          <Text style={[styles.text, styles.btn, styles.btnSecondary]}>Anmelden</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Interface Design - Wintersemester 2022/23</Text>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  h1: {
    fontSize: 38,
    fontWeight: 'bold',
  },
  logo: {
    width: 100,
    height: 100,
  },
  btnContainer: {
    marginVertical: 100,
  },
  btn: {
    backgroundColor: '#2C8B29',
    borderRadius: 50,
    paddingHorizontal: 75,
    paddingVertical: 5,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  btnSecondary: {
    backgroundColor: 0,
    borderColor: '#fff',
    borderWidth: 2,
  },
});

export default StartScreen;