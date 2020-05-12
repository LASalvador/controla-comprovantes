import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Firebase from '../../config/firebase';

export default class loginScreen extends React.Component {
  state={
    email:"",
    password:""
  }

  handleLogin = () => {
    const { email, password } = this.state

    Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('Inicio'))
        .catch(error => console.log(error))
  }

  handleCadastro = () => {
    this.props.navigation.navigate('Cadastro');
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Login</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Digite seu email" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Digite sua senha" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.loginBtn}
          onPress={this.handleLogin}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
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
    color:"white"
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