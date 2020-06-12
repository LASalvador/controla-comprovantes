import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Firebase from '../../config/firebase';
import CampoEntrada from '../components/CampoEntrada';
import RNPickerSelect from 'react-native-picker-select';
import Botao from '../components/Botao';

export default class consultaCategoriaScreen extends React.Component {
  state={
    name: "",
    email:"",
    password:"",
  }

  constructor (props) {
    super(props)
  }
   
  handleSignUp = () => {
    const { email, password } = this.state
    const { signUp } = this.props.route.params.authContext
    signUp({email, password})
  }
  
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Categoria</Text>
        <View style={styles.inputView} >
          <Text>Teste</Text>
        </View>
        <Botao onPress={this.handleSignUp} title="Editar"/>
        <Botao onPress={this.handleSignUp} title="Apagar"/>
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
      