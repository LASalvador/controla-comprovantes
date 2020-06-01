import React , { useState }from 'react';
import { Button, View, Text,  FlatList } from 'react-native';
import {StyleSheet} from 'react-native';

export default function categoriaScreen(){
  const [categoria] = useState([
    {categoria: 'luz', key:'1'},
    {categoria: 'Agua', key:'2'},
    {categoria: 'Passeio', key:'3'}
  ]);
  
  return(
    <View style={styles.container}>
      <Text style={styles.logo}>Categoria</Text>
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
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#005795", 
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#f2f2f2",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#005796",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  fundo:{
    width:"80%",
    color: "#005796",
    backgroundColor:"#f2f2f2",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:10
  },
  loginText:{
    color:"white"
  }
});