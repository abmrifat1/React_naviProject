/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Hello from "./src/containers/Hello";
import Hi from "./src/containers/Hi";
import Contact from "./src/containers/Contract";

const AppNavigator = createStackNavigator({
  Hello: {
    screen: Hello,
  },
  Hi:{
    screen:Hi,
  },
  Contact:{
    screen:Contact,
  }
});

export default createAppContainer(AppNavigator);
