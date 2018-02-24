
import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  View,
  FlatList
} from 'react-native';

const styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: "#DDDDDD"
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#48BBEC"
  },
  title: {
    fontSize: 20,
    color: "#656565"
  },
  rowContainer: {
    flexDirection: "row",
    padding: 10
  }
});

interface ItemProps {
  onPressItem: any;
  index: number;
  item: any;
}

interface ItemState {

}

class ListItem extends React.PureComponent<ItemProps, ItemState> {

  constructor(props: ItemProps) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }
  private onPress() {
    this.props.onPressItem(this.props.index);
  }

  render() {
    const item = this.props.item;
    const price =  item.price_formatted.split(' ')[0];

    return (
      <TouchableHighlight onPress={this.onPress}
        underlayColor="#dddddd">
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={{ uri: item.img_url}} />
            <View style={styles.textContainer}>
              <Text style={styles.price}>{price}</Text>
              <Text style={styles.title}
                numberOfLines={1}>{item.title}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    )
  }

}


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
    this.onPressItem = this.onPressItem.bind(this);
  }

  private keyExtractor(item, index) {
    return index;
  }

  private onPressItem(index: number) {
    console.log("pressed row:", index);
  }

  private renderItem({item, index}) {
    return (
      <ListItem item={item}
        index={index}
        onPressItem={this.onPressItem}/>
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

