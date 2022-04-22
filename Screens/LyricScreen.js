import { View, Image, Text, ImageBackground, StyleSheet, Pressable, Button} from "react-native";
import ILVHome from "../Images/ILV_Home_Screen.png"
import { styles } from "./HomeScreen";


export function LyricScreen({navigation}) {
    return (
      <ImageBackground source={ILVHome} style = {styles.image}>
   
      </ImageBackground>
       
            

    );
  }