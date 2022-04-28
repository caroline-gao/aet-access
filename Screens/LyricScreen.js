import { View, Image, Text, ImageBackground, StyleSheet, Pressable, Button} from "react-native";
import ILVHome from "../Images/ILV_Home_Screen.png"
import { styles } from "./HomeScreen";


export function LyricScreen({navigation}) {
    return (
      <ImageBackground source={ILVHome} style = {styles.image}>
         <View style={{flex: 1}} onStartShouldSetResponder = {() =>  navigation.navigate('PrepScreen')
}>
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.homeTitleText}>Welcome to</Text>
              <Text style={styles.homeTitleText}>Immersive Lyric Videos</Text>

              <View
                style = {styles.container}
              />
              <Text>Tap Anywhere to Continue</Text>

            </View>
         

          </View>   
      </ImageBackground>
       
            

    );
  }