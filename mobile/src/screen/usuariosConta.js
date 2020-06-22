import React, { Component } from 'react'
import { Text, View, FlatList, AsyncStorage } from 'react-native'
import {StyleSheet} from 'react-native'
import api from '../services/api'
import BotaoFlutuante from '../components/BotaoFlutuante'

export default class usuariosConta extends Component {
    state = {
        usuarios_list: [],
    }
    async componentDidMount () {
        const conta_id =  await AsyncStorage.getItem("contaId");

        const response = await api.get(`usuarios/${conta_id}`);

        const usuarios_list = response.data.usuarios_conta.map(item => {
            return { 
                id: item.usuario_id,
                nome: item.usuario_nome,
            }
        })

        this.setState({usuarios_list: usuarios_list})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}> Usuarios da conta </Text>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={this.state.usuarios_list}
                    renderItem={({ item }) => (
                        <Text>{item.nome}</Text>
                    )}
                />
                <BotaoFlutuante />
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
      marginTop: 40,
    },
    logo:{
      fontWeight:"bold",
      fontSize:40,
      color:"#005795", 
      marginBottom:40,
    },
});