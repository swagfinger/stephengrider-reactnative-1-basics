## Content

- initialRouteName is name of page to initially show
- createStackNavigator has all screens you can navigate to
- 'View' contains other elements
- 'Text' contains simple text

```js
import { Text, StyleSheet, View } from 'react-native';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);
```

## Lists

- 'data' is passed into 'data' prop,
- 'renderItem' is item to render
- provide a unique key for each item (optimization) when updating list
- 'KeyExtractor' called multiple times for list item
- 'marginVertical'
- 'horizontal' prop will scroll horizontally
- 'showHorizontalScrollIndicator' hide horizontal bar

## Navigation

- using buttons with 'Button', 'TouchableOpacity'
- Button has a 'title' prop
- Button has 'onPress'
- TouchableOpacity can put anything as children
- props is passed from createStackNavigator into props of screen.
- use props.navigation.navigate receives string of name of screen createStackNavigator
- auto back button generated on navigated page

```js
import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen!</Text>

      <Button
        title="Go to components demo"
        onPress={() => {
          console.log('button pressed');
          props.navigation.navigate('Components');
        }}
      />

      <TouchableOpacity
        onPress={() => {
          console.log('list pressed');
          props.navigation.navigate('List');
        }}
      >
        <Text>Go to list demo</Text>
      </TouchableOpacity>
    </View>
  );
};
```
