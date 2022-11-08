import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button title="incr" onPress={() => setCounter(counter + 1)} />
      <Button title="decr" onPress={() => setCounter(counter - 1)} />
      <Text>Current Count: {counter}</Text>
    </View>
  );

  const styles = StyleSheet.create({});
};

export default CounterScreen;
