import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Alert } from 'react-native'


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
      // backgroundColor:'black'
    },
    
  });


export default function BotaoFlutuante() {
    function clickHandler() {
        //function to handle click on floating Action Button
        Alert.alert('Floating Button Clicked');
    };

    return (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={clickHandler}
          style={styles.TouchableOpacityStyle}>
          <Image
            //We are making FAB using TouchableOpacity with an image
            //We are using online image here
             source={plusImg}
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
    )
}
