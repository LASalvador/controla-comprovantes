import * as React from 'react';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Form } from '@unform/mobile';
import { Input } from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';
import { Picker } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Icon } from 'react-native-elements';
import {StyleSheet} from 'react-native';
import Botao from '../components/Botao';
import CampoEntrada from '../components/CampoEntrada';

export default class loginScreen extends React.Component {
  state={
    categoria:"",
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
      <Text style={styles.logo}>Cadastro de Categoria</Text>
      <Form style={styles.inputView}>
         {/*<Text style={styles.topoText}>Categoria</Text>*/}
         <View style={styles.inputView} >
          <CampoEntrada 
            placeholder="Categoria"
            entrada={this.state.categoria}
          />
        </View>
      </Form>

      <Botao onPress={this.handleSignUp} title="Cadastrar"/>
      
    </View>
    );
  }
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
    /*marginBottom:40*/
    margin: 40
  },
  fundo:{
    width:"80%",
    backgroundColor:"#fff",
    /*borderRadius:25,*/
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:10
  },
  inputText:{
    height:50,
    color:"black",
    justifyContent:"center",
    textAlign: "center",
    marginTop: 18,
    fontSize:20
  },
  loginBtn:{
    width:"50%",
    backgroundColor:"#005796",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:10
  },
  loginText:{
    color: "white",
  },
  /*topoText:{
    color: "#000",
  },*/
  valortext:{
    color: "black",
  },

  
});