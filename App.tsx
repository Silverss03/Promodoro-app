import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useEffect, useState } from 'react';
import { TimerCountdownDisplay } from './TimerCountdownDisplay';
import { TimerToggleButton } from './TimerToggleButton';

const FOCUS_TIME_MINUTES = 30 * 60 * 1000 ; 
const BREAK_TIME_MINUTES = 5 * 60 * 1000 ;
export default function App() {
  const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINUTES) ;
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null) ;
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false) ;
  const [timerMode, setTimerMode] = useState<'focus' | 'break'>('focus') ;

  useEffect(() => {
    if(timerCount === 0 ){
      stopTimer()
      if(timerMode === 'focus'){
        setTimerMode('break')
        setTimerCount(BREAK_TIME_MINUTES)
      } else {
        setTimerMode('focus')
        setTimerCount(FOCUS_TIME_MINUTES)
      }
      stopTimer()
    }
  }, [timerCount])
  const startTimer = () =>{
    setIsTimerRunning(true)
    const id = setInterval(() => setTimerCount(prev => prev - 1000), 1000)
    setTimerInterval(id)
  }

  const stopTimer = () =>{
    setIsTimerRunning(false)
    if(timerInterval !== null){
      clearInterval(timerInterval)
    }
  }

  const timerDate = new Date(timerCount)
  return (
    <View style={{...styles.container, ...{backgroundColor : timerMode === 'break' ? '#2a9d8f' : '#d95550'}}}>
      <Text style = {styles.timerText}>{timerMode === 'focus' ? 'Time to Focus!' : 'Good job take a break!'}</Text>
      <StatusBar style="auto" />
      <TimerToggleButton isTimerRunning = {isTimerRunning} stopTimer = {stopTimer} startTimer = {startTimer}/>
      <TimerCountdownDisplay timerDate = {timerDate}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d95550',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText : {
    fontSize : 25,
    fontWeight : '500',
    color : 'white'
  }
});
