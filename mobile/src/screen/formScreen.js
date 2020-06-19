import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import { Form } from '@unform/mobile';
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet} from 'react-native';
import api from '../services/api';

export default class formScreen extends React.Component {
  state={
    tp_transacao: '',
    transacao_list: [],
    categoria_list: [],
    cat_transacao: '',
    valor: '',
  }

  constructor (props) {
    super(props)
  }
  
  async componentDidMount () {
    let response = await api.get('tptransacao');
    const transacao_list = response.data.tipo_transacoes.map(item => {
      return {
        label: item.nome,
        value: item.id
      }
    });
    this.setState({transacao_list: transacao_list});
    
    let conta_id =  await AsyncStorage.getItem("contaId");

    response = await api.get(`categoria/${conta_id}`);

    const categoria_list = response.data.categorias_conta.map(item => {
      return { 
        label: item.categoria_desc,
        value: item.categoria_id
      }
    })
    this.setState({categoria_list: categoria_list})

  }
  render(){
    return (
      <View style={styles.container}>
      <Text style={styles.logo}>Transações</Text>
      <Form style={styles.inputView}>
        <View style={styles.fundo}>
          <RNPickerSelect placeholder={{label: 'Selecione o tipo...',value: null,}}
              onValueChange={(value) => this.setState({tp_transacao: value})}
              items={this.state.transacao_list}
          />
        </View>
        
        <View style={styles.fundo}>
          <RNPickerSelect style={styles.fundo} placeholder={{label: 'Selecione a categoria...',value: null,}}
              onValueChange={(value) => this.setState({cat_transacao: value})}
              items={this.state.categoria_list}
          />
        </View>
        <View style={styles.fundo}>
          <TextInput placeholder='Valor'/>
        </View>
      </Form>

      <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Foto</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Enviar</Text>
        </TouchableOpacity>
      
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f4ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#005795", 
    /*marginBottom:40*/
    margin: 40
  },
  fundo:{
    width:"80%",
    backgroundColor:"#fff",
    /*borderRadius:25,*/
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:10
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
    width:"50%",
    backgroundColor:"#005796",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:10
  },
  loginText:{
    color: "white",
  },
  /*topoText:{
    color: "#000",
  },*/
  valortext:{
    color: "black",
  },

  
});