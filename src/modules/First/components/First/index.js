import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

import styles from './styles';

export default function ({
  plusOne,
  first: {
    value
  },
  navigation: {
    navigate
  }
}) {
  return (
    <View style={styles.container}>
      <Text>{value}</Text>

      <Button title="PLUS ONE" onPress={plusOne} />
      <Button title="GO TO SECOND PAGE" onPress={() => { navigate('SecondPage'); }} />
    </View>
  );
}
