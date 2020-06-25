import React , { useState }from 'react';
import { View, Text,  FlatList, Alert } from 'react-native';
import {StyleSheet} from 'react-native';
import BotaoFluante from '../components/BotaoFlutuante';
import Constants from 'expo-constants';

export default function categoriaScreen(){
  const [categoria] = useState([
    {categoria: 'Pessoa Fisica', key:'1'},
    {categoria: 'Pessoa Juridica', key:'2'}
  ]);
  
  return(
    <View style={styles.container}>
      <Text style={styles.logo}>Contas</Text>
      <FlatList
        keyExtractor={(item) => item.key}
        data={categoria}
        keyExtractor={item => item.id}
      />
      <BotaoFluante />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    fontSize:100,
    padding: 20,
    marginVertical: 8,
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

