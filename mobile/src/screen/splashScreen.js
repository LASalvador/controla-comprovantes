import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function splashScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}> Carregando... </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6f4ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#005795", 
        margin: 40
    },
})