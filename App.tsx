import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import SearchPage from './src/SearchPage';

const App = StackNavigator({
  Home: { screen: SearchPage},
});
export default App;
