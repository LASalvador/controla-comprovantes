import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Form } from '@unform/mobile';
import { Input } from 'react-native-elements';

const styles = StyleSheet.create({
  view: {
    padding: 20,
    marginTop: 30
  },
  texto: {
    fontWeight:"bold", 
    fontSize: 23,
    textAlign:"center"
  },
  input: {
    marginTop: 20,
  },
  button: {
    marginTop: 30,
  }
});

function cadastroScreen({ navigation }) {
  return (
    <View style={styles.view}>
      <Text style={styles.texto}>Cadastro</Text>
      <Form style={styles.form}>
        <Text style={styles.input}>Nome:</Text>
        <Input placeholder='Digite seu nome completo'/>
        <Text style={styles.input}>Email:</Text>
        <Input placeholder='Digite seu o seu email'/>
        <Text style={styles.input}>Senha:</Text>
        <Input placeholder='Senha' secureTextEntry={true}/>
      </Form>
      <View style={styles.button}>
        <Button title="Cadastrar" />
      </View>
    </View>
  );
}



export default cadastroScreen;