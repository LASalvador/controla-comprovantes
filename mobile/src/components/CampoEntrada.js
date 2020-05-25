import React from 'react';
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputText:{
      height:50,
      color:"#003f5c"
    }
  });

function CampoEntrada(props) {
    return (
        <TextInput
            style={styles.inputText}
            placeholder={props.placeholder}
            placeholderTextColor="#003f5c"
            onChangeText={text => props.entrada = text}
        />
    );
}

export default CampoEntrada;