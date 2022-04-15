import { View, Text, Button, Pressable, StyleSheet, Image, ImageBackground } from "react-native";
import Aa from "../Images/Aa.png";
import hand from "../Images/image 5.png";
import background from "../Images/home_background.png";

export function HomeScreen({ navigation }) {
    return (
        <ImageBackground source={background} style = {styles.image}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
                <Text style={styles.homeTitleText}>great, you're in!</Text>
                <Text style={styles.homeTitleText}>what's the vibe today?</Text>
                    <View style= {{ flexDirection: "row"}}>
                        <Pressable 
                            style = {[styles.button, styles.buttonOrange]} 
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
                            style = {[styles.button, styles.buttonBlue]}
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
                        {/* <Button
                        title="Go to Lyrics"
                        onPress={() => navigation.navigate('Lyrics')}
                        />
                        <Button
                        title="Go to Signing"
                        onPress={() => navigation.navigate('Signing')}
                        /> */}
                    </View>
            
                </View>
      </ImageBackground>
    );
  }

const styles = StyleSheet.create({
    homeTitleText: {
        fontSize: 28,
        fontWeight: "bold",
        color: '#FFFFFF'
        //fontFamily: ,

    },

    buttonImage: {
        width: 90,
        height: 90,
        resizeMode: "contain",
        marginVertical: 10
    },
    button: {
        width: 143,
        height: 153,
        alignItems: "center",
        padding: 4,
        marginHorizontal: 20,
        borderRadius: 8,
        marginTop: 150
    },
    buttonLabel: {
        width: 80,
        textAlign: "center",
    },
    buttonOrange: {
        backgroundColor: "#F8A186"
    },
    buttonBlue: {
        backgroundColor: "#52DFD7"

    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },

})