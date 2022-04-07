import { StatusBar } from 'expo-status-bar';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Lyrics"
        onPress={() => navigation.navigate('Lyrics')}
      />
      <Button
        title="Go to Signing"
        onPress={() => navigation.navigate('Signing')}
      />
    </View>
  );
}

function LyricScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Lyric Screen</Text>
    </View>
  );
}

function SignScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sign Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Lyrics" component={LyricScreen} />
        <Stack.Screen name="Signing" component={SignScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
