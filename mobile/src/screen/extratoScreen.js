import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default class extratoScreen extends Component {

  state={
    myKey: null
  }
  constructor(props) {
    super(props);
  }

  setValue(value) {
      this.setState({myKey:value})
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>
          Extrato!
        </Text>

        <TextInput
          style={styles.formInput}
          placeholder="Insira seu saldo atual!"
          value={this.state.myKey}
          onChangeText={(value) => this.setValue(value)}
          />      

        <Text style={styles.instructions}>
          Saldo = {this.state.myKey}
        </Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#005795", 
    marginBottom:40
  },
  formInput: {
    paddingLeft: 5,
    height: 50,
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius:25,
  },
  formButton: {
    borderWidth: 1,
    borderColor: "#555555",

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 15,
    fontSize: 25,
    fontWeight: 'bold',
  },
});

