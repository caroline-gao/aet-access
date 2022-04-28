import { View, ImageBackground, Text, Pressable } from "react-native-web";
import StarAndTrees from "../Images/starswithtrees.png"
import { styles } from "./HomeScreen";

export function WelcomeScreen({navigation}){
    return (
        <ImageBackground source = {StarAndTrees} style ={styles.image}>
            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style = {styles.homeTitleText}>Welcome to Wavves.</Text>
                    <View style={{marginTop: 30}}></View>
                    <View style = {{flexDirection: 'column'}}>
                        <Pressable
                            style = {[styles.button, styles.smallTopMargin, styles.buttonBlue]}
                            onPress = {() => navigation.navigate("NewUser")}
                        >
                            <Text style = {styles.standardText}>New User</Text>

                        </Pressable>

                        <Pressable
                            style = {[styles.button, styles.smallTopMargin, styles.buttonPink]}
                            onPress = {() => navigation.navigate("Home")}
                        >
                            <Text style = {styles.standardText}>Existing User</Text>
                        </Pressable>


                        <Text>what is Wavves?</Text>
                        <Text>FAQ's</Text>
                        <Text>Help Center</Text>
                    </View>
            </View>
        </ImageBackground>
    )
}