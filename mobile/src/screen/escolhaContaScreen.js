import React, { Component } from 'react'
import { View, Text,  FlatList, Alert } from 'react-native';
import {StyleSheet} from 'react-native';
import BotaoFluante from '../components/BotaoFlutuante';
import Constants from 'expo-constants';

export default class escolhaContaScreen extends Component {
  
  state = {
    contas_list: [{conta: 'Pessoa Fisica', key:'1'},{conta: 'Pessoa Juridica', key:'2'}],
  }

  handleClick = () => {
    this.props.navigation.navigate('Nova Conta')
  }

  componentDidMount () {
    // this.setState({contas_list: []})
  }

  handleChange = () => {
    Alert.alert('mudaaar')
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
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#005795", 
    marginBottom:40,
    textAlign: 'center'
  },
});


