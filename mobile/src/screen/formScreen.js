import * as React from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { Form } from '@unform/mobile';
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet} from 'react-native';
import api from '../services/api';
import CampoEntrada from '../components/CampoEntrada';
import Botao from '../components/Botao';
import SplashScreen from './splashScreen';

export default class formScreen extends React.Component {
  state={
    tp_transacao: "",
    transacao_list: [],
    categoria_list: [],
    cat_transacao: "",
    valor: "",
    desc: "",
    carregando: null,
  }

  constructor (props) {
    super(props)
  }
  
  async componentDidMount () {
    this.setState({carregando: true})
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
    this.setState({carregando: false})
  }
  
  async componentDidUpdate () {
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
  
  handleClick = async () => { 
    this.setState({carregando: true})
    let conta_id =  await AsyncStorage.getItem("contaId");
    let user_id =  await AsyncStorage.getItem("userId");
    
    
    await api.post('transacao', {
      desc: this.state.desc,
      tipo_id: this.state.tp_transacao,
      valor: this.state.valor,
      categoria_id: this.state.cat_transacao,
      conta_id: conta_id,
      usuario_id: user_id,
      
    })
    
    this.setState({carregando: false})
    this.props.navigation.navigate('Inicio')
  }
  
  render(){
    return (
      <View style={styles.container}>
        {this.state.carregando === true ? <SplashScreen></SplashScreen> : (
          <View style={styles.parent}>
            <Text style={styles.logo}>Transações</Text>
            <Form style={styles.inputView}>
              <View style={styles.fundo}>
                <CampoEntrada 
                  placeholder="Descricao"
                  onChange={(item) => {this.setState({desc: item})}}
                />
              </View>
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
                <CampoEntrada 
                  placeholder="Valor"
                  onChange={(item) => {this.setState({valor: item})}}
                />
              </View>
            </Form>
            <Botao
              title="Foto"
              onPress={() => {this.props.navigation.navigate('camera')}}
            ></Botao>
            <Botao 
              title="Salvar Transacao"
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
  parent : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },  
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#005795",
  },
  fundo:{
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:10,
  }
});