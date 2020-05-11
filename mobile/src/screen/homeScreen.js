import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class loginScreen extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Inicio</Text>
        <View style={styles.inputView} >
          <Text 
            style={styles.inputText}
            placeholderTextColor="#003f5c"
           >Saldo: 1000</Text>
        </View>
        <View style={styles.inputView} >
          <Text 
            style={styles.inputText} 
            placeholderTextColor="#003f5c"
           >Despesas: 500</Text>
        </View>
        <View style={styles.inputView} >
          <Text
            secureTextEntry
            style={styles.inputText} 
            placeholderTextColor="#003f5c"
          >Receita: 50</Text>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Cadastrar</Text>
        </TouchableOpacity>

  
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
  loginText:{
    color:"white"
  }
});