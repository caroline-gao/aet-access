import { View, Image, Text, ImageBackground, StyleSheet, Pressable, Button} from "react-native";
import ILVLoad from '../Images/ilv_prep_screen.png';
import { useEffect, useState } from "react";

export function ILVPrepScrren({navigation}) {
    const [count, setCount] = useState(3)
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount === 0) {
                    clearInterval(interval)
                    navigation.navigate('LyricVideo')
                    return 0
                } else {
                    return prevCount - 1
                }
            })
        }, 1000)
    }, [])
    const threeStyles = [styles.three, styles.text]
    const twoStyles = [styles.two, styles.text]
    if (count > 2) {
        twoStyles.push(styles.hidden)
    }
    const oneStyles = [styles.one, styles.text]
    if (count > 1) {
        oneStyles.push(styles.hidden)
    }

    console.log(count)

    return(
        <ImageBackground source={ILVLoad} style={styles.image}>
           
            <Text style={threeStyles}>
                3
            </Text>
            <Text style={twoStyles}>
                2
            </Text>
            <Text style={oneStyles}>
                1
            </Text>
        </ImageBackground>
    )
}



const styles=StyleSheet.create({
    three:{
        top: 200,
        right: 100,

    },
    two: {
        top: 350,
        left: 100,
    },
    one: {
        bottom: 70,
        right: 100,
    },

    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
      text: {
        position: "absolute",
          fontSize: 56,
          fontWeight: "bold",
          color: "#1C0749",
          textShadowColor: "#FFFFFF",
          textShadowRadius: 8
      },

      hidden: {
          opacity: 0
      }

})