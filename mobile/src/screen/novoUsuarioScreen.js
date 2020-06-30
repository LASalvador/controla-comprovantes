import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CampoEntrada from '../components/CampoEntrada';
import Botao from '../components/Botao';
import api from '../services/api';
import { SplashScreen } from 'expo';

export default class novoUsuarioScreen extends React.Component {
  state={
    name: "",
    email:"",
    password:"",
    carregando: null,
  }

  constructor (props) {
    super(props)
  }
   
  handleSignUp = async () => {
    this.setState({carregando: true})
    const { name, email, password } = this.state
    
    await Firebase.auth().createUserWithEmailAndPassword(email, password)
    const conta_id = await AsyncStorage.getItem('contaId');

    const user = Firebase.auth().currentUser
    
    const post_data = {
      nome: name,
      email: email,
      uid: user.uid,
      conta_id: conta_id,
    }
    
    const response = await api.post('novo', post_data);
    this.setState({carregando: false})
    
  }

  
  render(){
    return (
      <View style={styles.container}>
        {this.state.carregando === true ? < SplashScreen /> : (
          <View style={styles.parent}>
            <Text style={styles.logo}>Novo usuario</Text>
            <View style={styles.inputView} >
              <CampoEntrada 
                placeholder="Digite seu nome"
                onChange={(item) => {this.setState({name: item})}}
              />
            </View>
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

            <Botao onPress={this.handleSignUp} title="Cadastrar"/>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f4ff',
  },
  parent: {
    flex:1,
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
      