import * as React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import Botao from '../components/Botao';
import CampoEntrada from '../components/CampoEntrada';
import api from '../services/api';

export default class formCategoriaScreen extends React.Component {
  state={
    categoria:"",
  }

  constructor (props) {
    super(props)
  }
  
  handleClick = async () => {
    let conta_id =  await AsyncStorage.getItem("contaId");

    const response = await api.post('categoria', {
      categoria_desc: this.state.categoria,
      conta_id: conta_id
    });

    this.props.navigation.navigate('Categoria');
  }

  render(){
    return (
      <View style={styles.container}>
      <Text style={styles.logo}>Cadastro de Categoria</Text>
      <View style={styles.inputView} >
        <CampoEntrada 
          placeholder="Categoria"
          onChange={(item) => {this.setState({categoria: item})}}
        />
      </View>

      <Botao 
        title="Cadastrar"
        onPress={this.handleClick}
      />
      
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#e6f4ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    fontWeight:"bold",
    fontSize:40,
    color:"#005795", 
    marginBottom:40,
    textAlign: 'center'
  },
  inputView: {
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  }
});