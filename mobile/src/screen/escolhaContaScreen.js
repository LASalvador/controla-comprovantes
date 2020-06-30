import React, { Component } from 'react'
import { View, Text,  FlatList, AsyncStorage, TouchableOpacity, Alert } from 'react-native';
import {StyleSheet} from 'react-native';
import BotaoFluante from '../components/BotaoFlutuante';
import Constants from 'expo-constants';
import api from '../services/api';
import SplashScreen from './splashScreen';

export default class escolhaContaScreen extends Component {
  
  state = {
    contas_list: [],
    carregando: null,
  }

  handleClick = () => {
    this.props.navigation.navigate('Nova Conta')
  }

  async componentDidMount () {
    this.setState({carregando:true})
    const user_id = await AsyncStorage.getItem("userId");
    const response = await api.get(`conta/${user_id}`);
    const conta_list = response.data.contas_usuario.map(item => {
      return {
        key: item.conta_id,
        conta:item.perfil
      }
    })
    
    this.setState({contas_list: conta_list});
    this.setState({carregando:false})
    
  }

  async componentDidUpdate () {
    const user_id = await AsyncStorage.getItem("userId");
    const response = await api.get(`conta/${user_id}`);
    const conta_list = response.data.contas_usuario.map(item => {
      return {
        key: item.conta_id,
        conta:item.perfil
      }
    })

    this.setState({contas_list: conta_list});

  }

  handleChange = async (conta_id) => {
    const { signUp } = this.props.route.params.authContext
    const { switchAccount } = this.props.route.params.authContext
    await switchAccount({conta_id})
    this.props.navigation.navigate('Inicio')
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.carregando === true ? <SplashScreen /> : (
          <View style={styles.parent}>
            <Text style={styles.logo}>Contas</Text>
            <FlatList
              keyExtractor={(item) => item.key}
              data={this.state.contas_list}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={styles.item}
                  onPress={() => this.handleChange(item.key)}
                >
                  <Text>{item.conta}</Text>
                </TouchableOpacity>
                )}
            />
            <BotaoFluante onclick={this.handleClick}/>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#e6f4ff',
  },
  parent:{
    flex: 1,
  },
  item: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    padding: 20,
    marginHorizontal: 16,
    borderRadius: 25,
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#005795", 
    marginBottom:40,
    textAlign: 'center'
  },
});


