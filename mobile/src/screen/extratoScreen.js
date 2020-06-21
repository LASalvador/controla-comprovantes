import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 


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
         <FontAwesome5 name="coins" size={25} color="black"/>
          Conta
        </Text>

        <Text style={styles.saldo}>
          Saldo disponivel
        </Text>
        <TextInput
          style={styles.formInput}
          placeholder="Ex: 2.000"
          value={this.state.myKey}
          onChangeText={(value) => this.setValue(value)}
          />      

         {/*<Text style={styles.instructions}>
          Saldo = {this.state.myKey}
        </Text>*/}
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
    marginTop: -90,
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#005795", 
    marginBottom:40,
    textAlign: 'center',
  },
  formInput: {
    paddingLeft: 55,
    paddingRight: 55,
    height: 50,
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius:25,
    color: '#000',
    marginRight: 130,
  },
  saldo:{
    color: '#d6d6d6',
    marginBottom: 10,
    textAlign: 'left',
    marginRight: 130,
    fontSize: 20,
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

