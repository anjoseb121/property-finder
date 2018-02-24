import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import SearchPage from './src/SearchPage';
import SearchResults from './src/SearchResults';

const App = StackNavigator({
  Home: { screen: SearchPage},
  Results: { screen: SearchResults },
});
export default App;
