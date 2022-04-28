import {Image, Button, Text, View, ImageBackground } from "react-native-web";
import ProfileBackground from '../Images/ProfileScreen.png'
import { styles } from "./HomeScreen";

export function ILVProfileScreen({navigation}){
    return (
        <ImageBackground source={ProfileBackground} style={styles.image}>

        </ImageBackground>
    );
}