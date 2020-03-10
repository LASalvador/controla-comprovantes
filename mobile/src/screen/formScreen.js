import * as React from 'react';
import { Button, View, Text } from 'react-native';

function FormScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Forms Screen</Text>
      <Button
        title="Go to Form... again"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
export default FormScreen;