import React, { Component } from 'react'
import { View, Text,  FlatList, AsyncStorage } from 'react-native';
import {StyleSheet} from 'react-native';
import BotaoFluante from '../components/BotaoFlutuante';
import Constants from 'expo-constants';
import api from '../services/api';

export default class escolhaContaScreen extends Component {
  
  state = {
    contas_list: [],
  }

  handleClick = () => {
    this.props.navigation.navigate('Nova Conta')
  }

  async componentDidMount () {
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

  handleChange = () => {
    
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.logo}>Contas</Text>
      <FlatList
        keyExtractor={(item) => item.key}
        data={this.state.contas_list}
        renderItem={({ item }) => (
          <Text 
            style={styles.item}
            onPress={this.handleChange}
          >
            {item.conta}
          </Text>
          )}
      />
      <BotaoFluante onclick={this.handleClick}/>
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


