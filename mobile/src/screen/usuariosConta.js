import React, { Component } from 'react'
import { Text, View, FlatList, AsyncStorage } from 'react-native'
import {StyleSheet} from 'react-native'
import BotaoFlutuante from '../components/BotaoFlutuante'
import Constants from 'expo-constants';
import api from '../services/api'

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

    handleClick = () => {
        this.props.navigation.navigate('Novo Usuario')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}> Usuarios da conta </Text>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={this.state.usuarios_list}
                    renderItem={({ item }) => (
                        <Text
                            style={styles.item}
                        >
                            {item.nome}
                        </Text>
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
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#e6f4ff',
    },
    logo:{
      fontWeight:"bold",
      fontSize:40,
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
      },
});