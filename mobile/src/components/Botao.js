import React from 'react';
import { TouchableOpacity, StyleSheet, Text} from "react-native";

const styles = StyleSheet.create({
    loginBtn:{
        width:"80%",
        backgroundColor:"#005796",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    loginText:{
        color:"white"
    }
});

function Botao(props) {
    return (
        <TouchableOpacity 
          style={styles.loginBtn}
          onPress={props.onPress}
        >
          <Text style={styles.loginText}>{props.title}</Text>
        </TouchableOpacity>
    );
}


export default Botao;