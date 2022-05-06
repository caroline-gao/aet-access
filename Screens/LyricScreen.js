import { View, Text, ImageBackground} from "react-native";
import ILVHome from "../Images/ILV_Home_Screen.png"
import { styles } from "./HomeScreen";


export function LyricScreen({navigation}) {
    return (
        <ImageBackground source={ILVHome} style = {styles.image}>

          <View style={{flex: 1}} onStartShouldSetResponder = {() =>  navigation.navigate('ProfileScreen')
  }>
              <View style={{flex:1, alignItems: 'center', justifyContent: 'space-evenly'}}>
                <Text style={styles.homeTitleText}>Welcome to {"\n"}
                Immerse Lyric Video 
                </Text>
                <Text style ={styles.signTitleText}>Tap Anywhere to Continue</Text>

              </View>
          
          </View>
        </ImageBackground>
            

    );
  }