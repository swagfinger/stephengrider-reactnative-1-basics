import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <Text style={styles.viewOneStyle}>Child 1</Text>
      <Text style={styles.viewTwoStyle}>Child 2</Text>
      <Text style={styles.viewThreeStyle}>Child 3</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row', //column or row //default:column
    //alignItems: 'center', //default: stretch , flex-start, flex-end  //put on parent element
    justifyContent: 'space-between' //put on children 'flex-start', 'flex-end', 'justify-content', 'space-around'
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'red'
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    top: 50
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'purple'
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'red'
    // marginVertical: 20,
    // marginHorizontal: 20,

    // ...StyleSheet.absoluteFillObject
  }
});

export default BoxScreen;
