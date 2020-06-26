import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { ListItem, FlatList } from 'react-native-elements';
import Constants from 'expo-constants';




const list = [
{
  name: 'Alimentação',
  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  tipo: 'saida'
},
{
  name: 'Transporte',
  avatar_url: '  faces/twitter/adhamdannaway/128.jpg',
  tipo: 'saida',
},

]



export default class extratoScreen extends Component {

 render() {
  return (
    <View>
   <Text style={{fontSize: 50,color: "#005795",textAlign: 'center',fontWeight:"bold",marginBottom:40,marginTop: Constants.statusBarHeight,}}>Extrato</Text>
    {
      list.map((l, i) => (
        <ListItem
        key={i}
        leftAvatar={{ source: { uri: l.avatar_url } }}
        title={l.name}
        subtitle={l.tipo}
        bottomDivider
        />

        ))
    }

    </View>
  )
}}



