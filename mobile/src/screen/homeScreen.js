import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { Card } from 'react-native-elements';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, marginRight:25, marginLeft: 25, fontSize: 15, marginTop:40}}>
      <Text style={{ fontWeight:"bold", fontSize: 23, textAlign:"center"}}>Início</Text>
      <Card>
        <Text style={{textAlign: "center"}}>Debito : 100</Text>
      </Card>
      <Card>
        <Text style={{textAlign: "center"}}>Crétido : 50</Text>
      </Card>
      <Card>
        <Text style={{textAlign: "center"}}>Caixa : 100</Text>
      </Card>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Form')}
      />
    </View>
  );
}
export default HomeScreen;