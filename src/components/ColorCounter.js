import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`incr ${color}`} onPress={() => onIncrease()} />
      <Button title={`decr ${color}`} onPress={() => onDecrease()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
