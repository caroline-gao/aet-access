import { View, Image, Text, ImageBackground, StyleSheet, Pressable, Button} from "react-native";
import ILVLoad from '../Images/ilv_prep_screen.png';
import { styles } from "./HomeScreen";

export function ILVPrepScrren({navigation}) {
    return(
        <ImageBackground source={ILVLoad} style={styles.image}>
           <View style={{flex: 1}} onStartShouldSetResponder = {() =>  navigation.navigate('LyricVideo')
  }>
          
          </View>
        </ImageBackground>
    )
}