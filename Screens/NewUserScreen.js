import { View, ImageBackground, Text} from "react-native-web";
import StarAndTrees from "../Images/starswithtrees.png"
import { styles } from "./HomeScreen";

export function NewUserScreen({navigation}){
    return(
        <ImageBackground source = {StarAndTrees} style = {styles.image}>
            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style = {styles.homeTitleText}>welcome to Wavves.</Text>
                <Text style = {styles.standardText}>Let's get you started.</Text>
                    <View style = {{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        

                    </View>
            </View>
        </ImageBackground>
    )

}