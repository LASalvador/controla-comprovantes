import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Botao from '../components/Botao';
import SplashScreen from './splashScreen';
import api from '../services/api';

export default class cadastroScreen extends React.Component {
  state={
    perfil_conta: "",
    lista_perfil: [],
    carregando: null,
  }

  constructor (props) {
    super(props)
  }

  async componentDidMount () {
    this.setState({carregando: true})
    const response = await api.get('perfil');
    const lista_perfil = response.data.perfil.map(item => { 
      return {
        label: item.desc,
        value: item.id
      }
    })
    this.setState({lista_perfil: lista_perfil})
    this.setState({carregando: false})
  }
  
  async componentDidUpdate () {
    const response = await api.get('perfil');
    const lista_perfil = response.data.perfil.map(item => { 
      return {
        label: item.desc,
        value: item.id
      }
    })
    this.setState({lista_perfil: lista_perfil})
  }
  
  handleClick = async () => {
    this.setState({carregando: true})
    const user_id = await AsyncStorage.getItem('userId');
    const response = await api.post('nova_conta', {
      perfil_id: this.state.perfil_conta,
      usuario_id: user_id
    })
    this.setState({carregando: false})
  }

  render(){
    return (
      <View style={styles.container}>
        {this.state.carregando === true ? <SplashScreen /> : (
          <View style={styles.parent}>
            <Text style={styles.logo}>Nova Conta</Text>
            <View style={styles.fundo}>
            <RNPickerSelect style={styles.fundo} placeholder={{label: 'Selecione o perfil ...',value: null,}}
                onValueChange={(value) => this.setState({perfil_conta: value})}
                items={this.state.lista_perfil}
            />
            </View>
    
            <Botao 
              title="Cadastrar"
              onPress={this.handleClick}
            />
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
    flex: 1,
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
      