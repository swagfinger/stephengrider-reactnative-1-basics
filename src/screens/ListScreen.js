import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    //can add 'key'(type: string)
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 20 },
    { name: 'Friend #3', age: 20 },
    { name: 'Friend #4', age: 20 },
    { name: 'Friend #5', age: 20 },
    { name: 'Friend #6', age: 20 },
    { name: 'Friend #7', age: 20 },
    { name: 'Friend #8', age: 20 },
    { name: 'Friend #9', age: 20 },
    { name: 'Friend #10', age: 20 }
  ];
  return (
    //data is passed into 'data' prop,
    //renderItem is item to render
    //provide a unique key for each item (optimization) when updating list - KeyExtractor called multiple times for list item
    //marginVertical
    //'horizontal' prop will scroll horizontally
    //'showHorizontalScrollIndicator' hide horizontal bar

    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age: {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 40
  }
});

export default ListScreen;
