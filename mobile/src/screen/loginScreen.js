import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import CampoEntrada from '../components/CampoEntrada';
import Botao from '../components/Botao';

export default class loginScreen extends React.Component {
  state={
    email:"",
    password:""
  }
  constructor (props) {
    super(props)
  }

  handleLogin = () => {
    const { email, password } = this.state
    const { signIn } = this.props.route.params.authContext
    signIn({email, password})
    
}

  handleCadastro = () => {
    this.props.navigation.navigate('Cadastro');
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Login</Text>
        <View style={styles.inputView} >
          <CampoEntrada 
            placeholder="Digite seu email"
            onChange={(item) => {this.setState({email: item})}}
          />
        </View>
        <View style={styles.inputView} >
        <CampoEntrada 
            placeholder="Digite sua senha"
            onChange={(item) => {this.setState({password: item})}}
            secure={true}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <Botao onPress={this.handleSignUp} title="Login"/>
        <TouchableOpacity>
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
    color:"#003f5c"
  },
  forgot:{
    color:"white",
    fontSize:11
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