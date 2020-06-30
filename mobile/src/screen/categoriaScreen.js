import React, { Component } from 'react'
import { View, Text,  FlatList, AsyncStorage } from 'react-native';
import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import api from '../services/api';
import BotaoFlutuante from '../components/BotaoFlutuante';
import SplashScreen from './splashScreen';

export default class categoriaScreen extends Component {
  state = {
    categoria_list: [],
    to: "Cadastro de Categoria",
    carregando: null,
  }

  async componentDidMount () {
    this.setState({carregando: true})
    
    let conta_id =  await AsyncStorage.getItem("contaId");

    const response = await api.get(`categoria/${conta_id}`);
    const categoria_list = response.data.categorias_conta.map(item => {
      return { 
        id: item.categoria_id,
        categoria: item.categoria_desc,
      }
    })
    
    this.setState({categoria_list: categoria_list})

    this.setState({carregando: false})
  }

  async componentDidUpdate () {
    let conta_id =  await AsyncStorage.getItem("contaId");

    const response = await api.get(`categoria/${conta_id}`);
    const categoria_list = response.data.categorias_conta.map(item => {
      return { 
        id: item.categoria_id,
        categoria: item.categoria_desc,
      }
    })
    
    this.setState({categoria_list: categoria_list})
  }

  handleClick = () => {
    this.props.navigation.navigate('Cadastro de Categoria')
  }

  render() {
    return (
    <View style={styles.container}>
      {this.state.carregando === true ? <SplashScreen /> : (
        <View style={styles.parent}>
          <Text style={styles.logo}>Categoria</Text>
          <FlatList
            keyExtractor={(item) => item.id}
            data={this.state.categoria_list}
            renderItem={({ item }) => (
              <Text 
                style={styles.item}
              >
                {item.categoria}
              </Text>
              )}
            />
            <BotaoFlutuante onclick={this.handleClick}/>
        </View>
      )}
    </View>
    )
  }
}


const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#e6f4ff',
    marginTop: Constants.statusBarHeight,
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#005795", 
    marginBottom:40,
    textAlign: 'center'
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
});