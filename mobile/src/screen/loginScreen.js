import * as React from 'react';
import { View, Text } from 'react-native';

function loginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, marginRight:25, marginLeft: 25, fontSize: 15, marginTop:40}}>
      <Text style={{ fontWeight:"bold", fontSize: 23, textAlign:"center"}}>Login</Text>
    </View>
  );
}
export default loginScreen;