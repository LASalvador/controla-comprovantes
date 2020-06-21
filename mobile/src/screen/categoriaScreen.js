import React, { Component } from 'react'
import { View, Text,  FlatList, AsyncStorage } from 'react-native';
import {StyleSheet} from 'react-native';
import api from '../services/api'

export default class categoriaScreen extends Component {
  state = {
    categoria_list: [],
  }

  async componentDidMount () {
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

  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.logo}>Categoria</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={this.state.categoria_list}
        renderItem={({ item }) => (
          <Text>{item.categoria}</Text>
          )}
          />
    </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40, 
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