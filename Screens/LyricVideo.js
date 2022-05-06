import { View , Vibration} from "react-native";
import { useRef, useEffect, useState } from "react";
import { styles } from "./HomeScreen";
const sunflower = require('../Images/SunflowerSound.mp4');
import {Video} from 'expo-av';
import * as Haptics from 'expo-haptics';

export function LyricVideo({navigation}) {
    const PATTERN = [
        2600,
        2500, 
        2500,
        2800,

    ]

    const [count, setCount] = useState(0);
    const videoRef = useRef(null);
    const onPress = () => {
        videoRef.current.playAsync();
    };
    useEffect(() => {
        videoRef.current.playAsync()
        setInterval(() => {setCount(count => count + 1)}, 169);
    }, []);
    useEffect(() => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        Vibration.vibrate(PATTERN);
    }, [count]);

    return(
        <View>
            <Video ref={videoRef} source={sunflower} style={{width: "100%", height: "100%"}} resizeMode = "cover" isLooping />
        </View>
    )
}