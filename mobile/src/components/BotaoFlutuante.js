import * as React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import plusImg from '../../assets/plus.png'

const styles = StyleSheet.create({
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
    },
    
  });


export default function BotaoFlutuante(props) {

    return (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={props.onclick}
          style={styles.TouchableOpacityStyle}>
          <Image
             source={plusImg}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
    )
}
