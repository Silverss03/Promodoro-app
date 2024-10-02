import React from 'react'
import { StyleSheet, Button, View, Pressable } from 'react-native'
import {FontAwesome5} from '@expo/vector-icons'
type props = {
    isTimerRunning : boolean,
    stopTimer : () => void ,
    startTimer : () => void 
}
export const TimerToggleButton : React.FC<props> = ({
    isTimerRunning, 
    stopTimer,
     startTimer
}) => {
    return (
        <Pressable onPress={isTimerRunning ? stopTimer : startTimer}>
            <View style = {styles.conainer}>
                <FontAwesome5 name = {
                    isTimerRunning ? 'pause' : 'play'} 
                    size = {125} color = 'orange'
                    style = {styles.icon}
                />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    icon : {
        alignSelf : 'center',
        color : 'white'
    },
    conainer : {
        borderWidth : 5 , 
        width : 250,
        height : 250,
        borderRadius : 125,
        justifyContent : 'center',
        borderColor : 'white' ,
        marginVertical  : 50
    }
})