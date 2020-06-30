import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { ListItem } from 'react-native-elements';
import Constants from 'expo-constants';
import api from '../services/api';
import SplashScreen from './splashScreen';

export default class extratoScreen extends Component {

  state = {
    transacoes_list: [],
    carregando: null,
  }
  
  async componentDidMount() {
    this.setState({carregando: true})
    const conta_id = await AsyncStorage.getItem('contaId');
    
    const response = await api.get(`transacoes/${conta_id}`);
    
    this.setState({transacoes_list: response.data.transacoes});

    this.setState({carregando: false})
  }

  async componentDidUpdate() {
    const conta_id = await AsyncStorage.getItem('contaId');

    const response = await api.get(`transacoes/${conta_id}`);

    this.setState({transacoes_list: response.data.transacoes});
  }



 render() {
  return (
    <View style={styles.container}>
      {this.state.carregando === true ? <SplashScreen /> : (
        <View style={styles.parent}>
          <Text style={styles.logo}>Extrato</Text>
            {
              this.state.transacoes_list.map((item, i) => (
                <ListItem style={styles.item}
                  key={i}
                  title={item.desc}
                  subtitle={
                    <View>
                      <Text>{item.categoria_desc}</Text>
                      <Text>{item.tipo_desc}</Text>
                      <Text>{item.tipo_desc}</Text>
                      <Text>{item.usuario_nome}</Text>
                    </View>
                  }
                  rightTitle={item.valor}
                  bottomDivider
                />

                ))
            }
        </View>
      )}
    </View>
  )
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f4ff'
  },
  parent: {
    flex: 1,
  },  
  logo: {
    fontWeight:"bold",
    fontSize:50,
    color:"#005795",
    textAlign: 'center',
    marginBottom:30,
    marginTop: Constants.statusBarHeight
  },
  item: {
    marginTop: 10,
  }
})
