import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { ListItem, FlatList } from 'react-native-elements';
import Constants from 'expo-constants';


const list = [
{
  name: 'Alimentação',
  tipo: 'saida',
  valor: '560.00'
},
{
  name: 'Transporte',
  tipo: 'saida',
  valor: '1.000',
},
{
  name: 'Salário',
  tipo: 'entrada',
  valor: '4.000',
},
{
  name: 'Mercado',
  tipo: 'saida',
  valor: '800.00',
},

]



export default class extratoScreen extends Component {

 render() {
  return (
    <View style={{background:'#fff',}}>
   <Text style={{fontSize: 55,color: "#005795",textAlign: 'center',fontWeight:"bold",marginBottom:40,marginTop: Constants.statusBarHeight,}}>Extrato</Text>
    {
      list.map((l, i) => (
        <ListItem style={{marginTop: 10,}}
        key={i}
        title={l.name}
        subtitle={l.tipo}
        rightTitle={l.valor}
        bottomDivider
        />

        ))
    }

    </View>
  )
}}

