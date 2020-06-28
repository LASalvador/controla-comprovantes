import * as React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import {StyleSheet} from 'react-native';
import api from '../services/api';
import { Camera } from 'expo-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome} from '@expo/vector-icons';

export default class formScreen extends React.Component {
  state={
    hasPermission: null,
  }

  constructor (props) {
    super(props)
    this.camera = React.createRef();
  }
  
  async componentDidMount () {
    const {status} = await Camera.requestPermissionsAsync();

    this.setState({hasPermission: status === 'granted'})

  }

  handleClick = async () => {
      this.props.navigation.navigate('Transacoes')
  }

  render(){
    return (
    <View
        style={{
            flex: 1,
        }}
    >   
        <Camera
            style={{flex: 1}}
            type={Camera.Constants.Type.back}
            ref={this.camera}
        >
        </Camera>
        <TouchableOpacity style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#121212',
            margin: 20,
            borderRadius: 10,
            height: 50
        }}
        onPress={this.handleClick}
        >
            <FontAwesome 
                name="camera"
                size={23}
                color="#fff"
            >
            </FontAwesome>         
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
    marginTop: 30
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#005795",
  },
  fundo:{
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:10,
  }
});