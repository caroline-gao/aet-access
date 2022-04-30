import { Pressable } from "react-native";
import {Image, Button, Text, View, ImageBackground } from "react-native";
import album from "../Images/album.png";
import ProfileBackground from '../Images/ProfileScreen.png'
import { styles } from "./HomeScreen";

export function ILVProfileScreen({navigation}){
    return (
        <ImageBackground source={ProfileBackground} style={styles.image}>
            <Pressable
            style = {[styles.button, styles.bigButton, styles.buttonImage]} 
                            onPress={() => navigation.navigate('PrepScreen')}>
                                <Image 
                                source={album}
                                style = {styles.buttonImage}
                            /> 
            </Pressable>
        </ImageBackground>
    );
}