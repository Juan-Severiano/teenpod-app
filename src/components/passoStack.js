import React from 'react';
import { Text, View, Button } from 'react-native';

export default props => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {props.back
          ? <Button
            title='Voltar'
            onPress={() => {
              props.navigation.goBack()
            }}
          />
          : false
        }
        {props.next
          ? <Button
            title='Avancar'
            onPress={() => {
              props.navigation.push(props.next, props.nextParam || null)
            }}
          />
          : false
        }
      </View>
      <View style={{ flex: 1 }}>
        {props.children}
      </View>
    </View>
  );
}