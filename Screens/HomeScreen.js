import { View, Text, Pressable, StyleSheet, Image, ImageBackground } from "react-native";
import Aa from "../Images/Aa white.png";
import hand from "../Images/image 5 white.png";
import background from "../Images/home_background.png";

export function HomeScreen({ navigation }) {
    return (
        <ImageBackground source={background} style = {styles.image}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
                <Text style={styles.homeTitleText}>great, you're in!</Text>
                <Text style={styles.homeTitleText}>what's the vibe today?</Text>
                    <View style= {{ flexDirection: "row"}}>
                        <Pressable 
                            style = {[styles.button, styles.bigButton, styles.buttonBlue]} 
                            onPress={() => navigation.navigate('Lyrics')}
                        >
                            <Image 
                                source={Aa}
                                style = {styles.buttonImage}
                            />
                            <Text style = {styles.buttonLabel}>
                                immersive lyric videos
                            </Text>
                        </Pressable>
                        <Pressable 
                            style = {[styles.button, styles.bigButton, styles.buttonPink]}
                            onPress={() => navigation.navigate('Signing')}
                        >
                            <Image 
                                source={hand}
                                style = {styles.buttonImage}
                            />
                            <Text style = {styles.buttonLabel}>
                                sign battle!
                            </Text>
                        </Pressable>

                    </View>
            
                </View>
      </ImageBackground>
    );
  }

export const styles = StyleSheet.create({
    homeTitleText: {
        fontSize: 28,
        fontWeight: "bold",
        color: '#FFFFFF',
        textAlign: "center",
        //fontFamily: ,

    },

    buttonImage: {
        width: 90,
        height: 90,
        resizeMode: "contain",
        marginVertical: 10
    },
    button: {
        width: 150,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
        marginHorizontal: 20,
        borderRadius: 8,
        marginTop: 150
    },
    bigButton:{
        width: 143,
        height: 153
    },
    signButton: {
        width: 287,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
        marginHorizontal: 20,
        borderRadius: 8,
        marginTop: 150
    },
    buttonLabel: {
        width: 80,
        textAlign: "center",
        color: "#FFFFFF",
    },
    buttonPink: {
        backgroundColor: "#DC64D0"
    },
    buttonBlue: {
        backgroundColor: "#528ADF"
    },
    buttonDarkBlue: {
        backgroundColor: "#1C0749"
    },
    white:{
        backgroundColor: "#FFFFFF"
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
    container: {
        flex: 1,
        backgroundColor: "#28184B",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: 300,
        height: 50,
        padding: 10,
        margin: 20,
    },
    smallTopMargin: {
        marginTop: 10
    },
    standardText:{
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: "center",
        marginHorizontal: 10,
        padding: 2,
        borderRadius: 10,
    },
    signTitleText: {
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: "center",
        marginHorizontal: 40,
        backgroundColor: "#1C0749",
        padding: 10,
        borderRadius: 10,
        //fontFamily: ,
    },
    signButtonLabel: {
        width: 273,
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        color: "#FFFFFF",
    },

})