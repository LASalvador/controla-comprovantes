import React , { useState }from 'react';
import { Button, View, Text,  FlatList } from 'react-native';
import {StyleSheet} from 'react-native';


export default function categoriaScreen(){
  const [categoria] = useState([
    {categoria: 'Pessoa Fisica', key:'1'},
    {categoria: 'Pessoa Juridica', key:'2'}
  ]);
  
  return(
    <View style={styles.container}>
      <Text style={styles.logo}>Conta</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={categoria}
        renderItem={({ item }) => (
        <Text>{item.categoria}</Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:100
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#005795", 
    marginBottom:40,
    marginTop:150
  },
  
});