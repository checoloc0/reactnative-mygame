import { Button, StyleSheet,Text, View } from "react-native";
import React, { useState,useEffect } from 'react'
import Card from "../components/Card";

export default GameScreen = () => {

    const [currentGuess, setCurrentGuess] = useState();

  useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (100 - 1) + 1));
  }, []);

    return(
        <View style={styles.container}>
                <Text>La suposición del oponente  </Text>
                   <Text> {currentGuess}</Text>
                    <Card newStyles={styles.buttonContainer}>
                            <Button title="Menor"/>
                            <Button title="Mayor"/>
                            
                    </Card>
            
        </View>

    )

}

const styles= StyleSheet.create ({
    container : {
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:20,
            width:300,

    }


  

})