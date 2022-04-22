import { View, Text, ImageBackground } from "react-native";
import signBackground from "../Images/signBackground.png"
import { styles } from "./HomeScreen";

export function SignScreen() {
    return (
      <ImageBackground source={signBackground} style = {styles.image}>
        
      </ImageBackground>
    );
  }