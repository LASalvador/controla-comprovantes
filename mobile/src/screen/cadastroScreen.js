import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Form } from '@unform/mobile';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';

function cadastroScreen({ navigation }) {
  return (
    <View style={styles.view}>

      <Text style={styles.texto}>Cadastro</Text>

      <Form style={styles.form}>
        <Text>Nome:</Text>
        <Input placeholder='Digite seu nome completo'/>
        <Text>Email:</Text>
        <Input placeholder='Digite seu o seu email'/>
        <Text>Senha:</Text>
        <Input placeholder='Valor' secureTextEntry={true}/>
      </Form>
      <Button title="Cadastrar" style={{marginBottom:20}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
  flex: 1, 
  marginRight:25, 
  marginLeft: 25, 
  fontSize: 15,
  marginTop:40, 
  height: 50
},
texto: {
  fontWeight:"bold", 
  fontSize: 23,
  textAlign:"center"
},
form: {
  marginBottom:20,
  padding: "50 !important"
}
});

export default cadastroScreen;