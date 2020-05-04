import * as React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { Form } from '@unform/mobile';
import { Input } from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';
import { Picker } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Icon } from 'react-native-elements';

function FormScreen({ navigation }) {
  return (
    <View style={{ flex: 1, marginRight:25, marginLeft: 25, fontSize: 15, marginTop:40}}>
      <Text style={{ fontWeight:"bold", fontSize: 23, textAlign:"center"}}>Transações</Text>
      <Form style={{marginBottom:20}}>
        <Text>Categoria</Text>
        <RNPickerSelect style={{ fontWeight:"bold"}}
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Água', value: 'agua' },
                { label: 'Luz', value: 'luz' },
                { label: 'Transporte', value: 'transporte' },
            ]}
        />

        <Text>Tipo</Text>
        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Água', value: 'agua' },
                { label: 'Luz', value: 'luz' },
                { label: 'Transporte', value: 'transporte' },
            ]}
        />

        <Input placeholder='Valor'/>
      </Form>

      <Button title="Foto" style={{marginBottom:20}}/>
      
      <Button
        title="Go to Form... again"
        onPress={() => navigation.navigate('Home')}
      />
      
    </View>
  );
}
export default FormScreen;