import * as React from 'react';
import { Button, View, Text } from 'react-native';

function extratoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, marginRight:25, marginLeft: 25, fontSize: 15, marginTop:40}}>
      <Text style={{ fontWeight:"bold", fontSize: 23, textAlign:"center"}}>Extrato</Text>
    </View>
  );
}
export default extratoScreen;