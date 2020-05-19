import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';

export default class loginScreen extends React.Component {
  state={
    email:"",
    password:""
  }

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    console.log(this.props);
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Controle</Text>
        <View style={styles.inputView} >
          <Text 
            style={styles.inputText}
            placeholderTextColor="#003f5c"
           >Saldo: 1000</Text>
        </View>
        <View style={styles.inputView} >
          <Text 
            style={styles.inputText} 
            placeholderTextColor="#003f5c"
           >Despesas: 500</Text>
        </View>
        <View style={styles.inputView} >
          <Text
            secureTextEntry
            style={styles.inputText} 
            placeholderTextColor="#003f5c"
          >Receita: 50</Text>
        </View>

        <TouchableOpacity 
          style={styles.loginBtn}
          onPress={this.props.route.params.authContext.signOut}
        >
          <Text style={styles.loginText}>Sair</Text>
        </TouchableOpacity>
              
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f4ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#005795", 
    /*marginBottom:40*/
    margin: 40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black",
    justifyContent:"center",
    textAlign: "center",
    marginTop: 18,
    fontSize:20
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
  loginText:{
    color:"white"
  }
});