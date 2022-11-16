import { StyleSheet, Text, View,Dimensions } from 'react-native';
import React from 'react'

//const width = Dimensions.get('window').width
//const height= Dimensions.get('window').height

export default Card = ({children, newStyles}) => {
    return <View style={{...styles.inputContainer,...newStyles}}>{children}</View>;
    
}

const styles = StyleSheet.create({
    inputContainer:{
        width: 300,
        padding: 20,
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.5,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "white",

    },
})

