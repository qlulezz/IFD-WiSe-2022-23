import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from "./screens/StartScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import MapScreen from "./screens/MapScreen";
import TaskScreen from "./screens/TaskScreen";
import InventoryScreen from "./screens/InventoryScreen";
import ScannerScreen from "./screens/ScannerScreen";

import Jungdurchforstung from "./screens/games/Jungdurchforstung";

const Stack = createNativeStackNavigator();

function App() {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Login" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Map" component={MapScreen} options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="Task" component={TaskScreen} options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="Inventory" component={InventoryScreen} options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="Scanner" component={ScannerScreen} options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="Jungdurchforstung" component={Jungdurchforstung} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;