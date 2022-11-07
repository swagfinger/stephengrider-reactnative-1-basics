import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const myName = 'Clark';

  return (
    <View>
      <Text style={styles.textStyle}>Hello world</Text>
      <Text style={styles.paragraphStyle}>My name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  paragraphStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
