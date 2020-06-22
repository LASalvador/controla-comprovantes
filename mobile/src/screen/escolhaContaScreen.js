import React , { useState }from 'react';
import { View, Text,  FlatList, Alert } from 'react-native';
import {StyleSheet} from 'react-native';
import BotaoFluante from '../components/BotaoFlutuante'



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
        renderItem={({ item }) => (
        <Text>{item.categoria}</Text>
        )}
      />
      <BotaoFluante />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    fontSize:100
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#005795", 
    marginBottom:40,
    marginTop:150
  },

  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    // backgroundColor:'black'
  },
  
});