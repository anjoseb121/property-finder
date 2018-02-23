import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

class SearchPage extends React.Component<{}> {

  static navigationOptions = {
    title: 'Property Finder',
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.ts to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = StackNavigator({
  Home: { screen: SearchPage},
});
export default App;
