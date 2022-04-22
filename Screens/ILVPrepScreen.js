import { View , Button, Image, ImageBackground} from "react-native";
import ILVLoad from '../Images/ilv_prep_screen.png';
import { styles } from "./HomeScreen";

export function ILVPrepScrren() {
    return(
        <ImageBackground source={ILVLoad} style={styles.image}>

        </ImageBackground>
    )
}