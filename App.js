import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react'
import { useFonts } from 'expo-font';

export default function App() {
   const [loaded]= useFonts({
      PermMaker: require('./assets/fonts/PermanentMarker-Regular.ttf')
   })

  const [userNumber, setUserNumber]= useState();
  const [winOrLose, setwinOrLose]= useState(false)
  const [result, setResult]= useState('')
  
  const handleStartGame = (selectedNumber)=>{
      setUserNumber(selectedNumber);
  };
 /* const handleFinishGame = (seleccion, number)={
      if((seleccion==="lower" && userNumber> number) || seleccion ==="greater" && userNumber>number ){


      }
  }*/
let content= <StartGameScreen onStartGame={handleStartGame}/>;

if( userNumber){
   content=<GameScreen/>
}

if(!loaded){
  return null
}
  return (
    <View style={styles.container}>
       <StatusBar style="auto" />
       <Header title={"Adivina mi número"} newStyles={{fontFamily: 'PermMaker'}}/>
       {content}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
