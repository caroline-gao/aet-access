import { StatusBar } from 'expo-status-bar';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './Screens/HomeScreen';
import { LyricScreen } from './Screens/LyricScreen';
import { SignScreen } from './Screens/SignScreen';
import { ILVPrepScrren } from './Screens/ILVPrepScreen';
import {SignHomeScreen} from './Screens/SignHomeScreen';
import { WelcomeScreen } from './Screens/WelcomeScreen';
import {ILVProfileScreen} from './Screens/ILVProfileScreen';
import { NewUserScreen } from './Screens/NewUserScreen';
import { LyricVideo } from './Screens/LyricVideo';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen name="Lyrics" component={LyricScreen} />
        <Stack.Screen name="Signing" component={SignScreen} />
        <Stack.Screen name="PrepScreen" component={ILVPrepScrren} />
        <Stack.Screen name="ProfileScreen" component={ILVProfileScreen} />
        <Stack.Screen name="SignHome" component={SignHomeScreen} />
        <Stack.Screen name="NewUser" component={NewUserScreen}/>
        <Stack.Screen name="LyricVideo" component={LyricVideo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
