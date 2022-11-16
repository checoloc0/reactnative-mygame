import {StyleSheet,Text,View} from "react-native"
import React from "react"
import { StatusBar } from "react-native"
import colors from "../constants/colors"



export default Header = ({title,newStyles}) => {
    return (
        <View  style= { styles.header}>
            <Text style= {{...styles.headerTitle, ...newStyles}}> {title}</Text>
        </View>
    )


}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#3d5a80",
        height: 90,
        paddingTop: 36,
        alignItems:"center",
        justifyContent: "center",
    },
    headerTitle:{
        color: colors.white,
        fontSize: 22,
        


    },



})