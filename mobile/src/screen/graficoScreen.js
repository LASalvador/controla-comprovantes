import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CampoEntrada from '../components/CampoEntrada';
import RNPickerSelect from 'react-native-picker-select';
import Botao from '../components/Botao';
import api from '../services/api';

export default class cadastroScreen extends React.Component {
  
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Grafico</Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#005795", 
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#f2f2f2",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
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
  fundo:{
    width:"80%",
    color: "#005796",
    backgroundColor:"#f2f2f2",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:10
  },
  loginText:{
    color:"white"
  }
});
      