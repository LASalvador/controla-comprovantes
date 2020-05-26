import * as React from 'react';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Form } from '@unform/mobile';
import { Input } from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';
import { Picker } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Icon } from 'react-native-elements';
import {StyleSheet} from 'react-native';
import { ListItem } from 'react-native-elements'

export default class loginScreen extends React.Component {
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