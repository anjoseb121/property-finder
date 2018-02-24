
import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  FlatList
} from 'react-native';


interface Props {
  navigation: any;
}

interface State {

}

export default class SearchResults extends Component<Props, State> {

  static navigationOptions = {
    title: 'Results'
  }

  constructor(props: Props) {
    super(props);
    this.keyExtractor = this.keyExtractor.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  private keyExtractor(item, index) {
    return index;
  }

  private renderItem({item}) {
    return (
      <TouchableHighlight
        underlayColor="#DDDDDD">
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }
  render() {
    const { params } = this.props.navigation.state;
    return(
      <FlatList data={params.listings}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}/>
    );
  }
}