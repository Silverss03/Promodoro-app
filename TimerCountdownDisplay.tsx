import React from "react";
import { Text , View, StyleSheet} from "react-native";

type props = {
    timerDate : Date
}
export const TimerCountdownDisplay : React.FC<props> = ({timerDate}) => {
    return (
        <View>
            <Text style = {styles.timerCountDownText}>
                {timerDate.getMinutes().toString().padStart(2, "0")}:
                {timerDate.getSeconds().toString().padStart(2, "0")}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    timerCountDownText : {
        fontSize : 40,
        fontWeight : '800',
        color : 'white'
    }
})