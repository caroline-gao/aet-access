import { View, Image, Text, ImageBackground, StyleSheet, Pressable, Button} from "react-native";
import signBackground from "../Images/signBackground.png"
import { styles } from "./HomeScreen";


export function SignHomeScreen({navigation}) {
    return (
      <ImageBackground source={signBackground} style = {styles.image}>
   
      </ImageBackground>
       
            

    );
  }