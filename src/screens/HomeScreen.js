import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

//Button has a 'title' prop
//Button has 'onPress'
//TouchableOpacity can put anything as children
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen!</Text>

      <Button
        title="Go to components demo"
        onPress={() => {
          console.log('button pressed');
          navigation.navigate('Components');
        }}
      />
      <Button
        title="Go to list demo"
        onPress={() => {
          console.log('button pressed');
          navigation.navigate('List');
        }}
      />
      <Button
        title="Go to image demo"
        onPress={() => {
          console.log('button pressed');
          navigation.navigate('Image');
        }}
      />

      <Button
        title="Go to counter demo"
        onPress={() => {
          console.log('button pressed');
          navigation.navigate('Counter');
        }}
      />

      <Button
        title="Go to color demo"
        onPress={() => {
          console.log('button pressed');
          navigation.navigate('Color');
        }}
      />

      <Button
        title="Go to square demo"
        onPress={() => {
          console.log('button pressed');
          navigation.navigate('Square');
        }}
      />

      <Button
        title="Go to text demo"
        onPress={() => {
          console.log('button pressed');
          navigation.navigate('Text');
        }}
      />

      <Button
        title="Go to box demo"
        onPress={() => {
          console.log('button pressed');
          navigation.navigate('Box');
        }}
      />

      {/* 
      <TouchableOpacity
        onPress={() => {
          console.log('list pressed');
          props.navigation.navigate('List');
        }}
      >
        <Text>Go to list demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
