import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage} from 'react-native';
import api from '../services/api';
import SplashScreen from "./splashScreen";
import { Constants } from 'expo-camera';

export default class loginScreen extends React.Component {
  state={
    entradas: null,
    saidas: null,
    carregando: false
  }

  constructor (props) {
    super(props)
  }

  async componentDidUpdate () {
    const conta_id = await AsyncStorage.getItem('contaId');

    const response = await api.get(`transacoes/${conta_id}`);
    let entradas = 0;
    let saidas = 0
    
    response.data.transacoes.forEach(item => {
      if (item.tipo_id == 1) {
        entradas += item.valor
      } else {
        saidas += item.valor
      }
    })

    this.setState({entradas: entradas})
    this.setState({saidas: saidas})
  }
  
  async componentDidMount () {
    const conta_id = await AsyncStorage.getItem('contaId');
    
    this.setState({carregando: true})
    
    const response = await api.get(`transacoes/${conta_id}`);
    let entradas = 0;
    let saidas = 0
    
    response.data.transacoes.forEach(item => {
      if (item.tipo_id == 1) {
        entradas += item.valor
      } else {
        saidas += item.valor
      }
    })

    this.setState({entradas: entradas})
    this.setState({saidas: saidas})


    this.setState({carregando: false})
  }

  render(){
    return (
      <View style={styles.container}>
        {this.state.carregando == true ? <SplashScreen /> : (
          <View style={styles.parent}>
              <Text style={styles.logo}>Controle</Text>
            <View style={styles.inputView} >
              <Text 
                style={styles.inputText} 
                placeholderTextColor="#003f5c"
              >
                Receitas: {this.state.entradas == null ? 0 : this.state.entradas}
              </Text>
            </View>
            <View style={styles.inputView} >
              <Text
                secureTextEntry
                style={styles.inputText} 
                placeholderTextColor="#003f5c"
              >
                Despesas: {this.state.saidas == null ? 0 : this.state.saidas}
              </Text>
            </View>
    
            <TouchableOpacity 
              style={styles.loginBtn}
              onPress={this.props.route.params.authContext.signOut}
            >
              <Text style={styles.loginText}>Sair</Text>
            </TouchableOpacity>
          </View>
        )}
              
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#e6f4ff',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#005795", 
    /*marginBottom:40*/
    margin: 40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
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