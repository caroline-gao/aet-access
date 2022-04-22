import { View, Text, Button, Pressable, StyleSheet, Image, ImageBackground } from "react-native";
import signBackground from "../Images/signBackground.png"
import { styles } from "./HomeScreen";

export function SignScreen({navigation}) {
    return (
      <ImageBackground source={signBackground} style = {styles.image}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.signTitleText}>Sign Battle is an interactive experience where you can
          test your dance and sign language skills!{"\n"}
          Follow the sign prompts on the screen and 
          turn your phone into a silent dance party!
          </Text>

            <Pressable 
            style = {[styles.signButton, styles.buttonDarkBlue]}
            onPress={() => navigation.navigate('SignHome')}
            >
              <Text style = {styles.signButtonLabel}>
                Let the Battle begin!
              </Text>
            </Pressable>
          </View> 

        
      </ImageBackground>
    );
  }