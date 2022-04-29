import { Pressable } from "react-native";
import {Image, Button, Text, View, ImageBackground } from "react-native-web";
import ProfileBackground from '../Images/ProfileScreen.png'
import { styles } from "./HomeScreen";

export function ILVProfileScreen({navigation}){
    return (
        <ImageBackground source={ProfileBackground} style={styles.image}>
            <Pressable
            style = {[styles.button, styles.bigButton, styles.buttonPink]} 
                            onPress={() => navigation.navigate('PrepScreen')}>
            </Pressable>
        </ImageBackground>
    );
}