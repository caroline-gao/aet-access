import { StatusBar } from 'expo-status-bar';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './Screens/HomeScreen';
import { LyricScreen } from './Screens/LyricScreen';
import { SignScreen } from './Screens/SignScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen name="Lyrics" component={LyricScreen} />
        <Stack.Screen name="Signing" component={SignScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
