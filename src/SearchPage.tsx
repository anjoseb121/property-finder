import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';


const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
  image: {
    width: 217,
    height: 138
  }
});

interface Props {
}

interface State {
  searchString: string;
  isLoading: boolean;
}

export default class SearchPage extends Component<Props, State> {

  static navigationOptions = {
    title: 'Property Finder',
  };

  constructor(props: Props) {
    super(props);
    this.onSearchTextChanged = this.onSearchTextChanged.bind(this);
    this.onSearchPressed = this.onSearchPressed.bind(this);

    this.state = {
      searchString: 'london',
      isLoading: false
    }
  }

  private executeQuery(query: string) {
    console.log(query)
    this.setState({
      isLoading: true
    });
  }

  private urlForQueryAndPage(key, value, pageNumber) {
    const data: any = {
      country: 'uk',
      pretty: '1',
      encoding: 'json',
      listing_type: 'buy',
      action: 'search_listings',
      page: pageNumber,
    };
    data[key] = value;

    const queryString = Object.keys(data)
      .map((key) => key + '=' + encodeURIComponent(data[key]))
      .join('&');
    return 'https://api.nestoria.co.uk/api?' + queryString;
  }

  private onSearchPressed() {
    const query = this.urlForQueryAndPage('place_name', this.state.searchString, 1);
    this.executeQuery(query);
  }

  private onSearchTextChanged(event: any) {
    this.setState({
      searchString: event.nativeEvent.text
    });
  }

  render() {
    const spinner = this.state.isLoading ? <ActivityIndicator size="large"/> : null;

    return(
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for houses to buy!
        </Text>
        <Text style={styles.description}>
          Search by place-name or postcode
        </Text>
        <View style={styles.flowRight}>
          <TextInput underlineColorAndroid={'transparent'}
            style={styles.searchInput}
            value={this.state.searchString}
            onChange={this.onSearchTextChanged}
            placeholder="Search via name or postcode"/>
          <Button onPress={this.onSearchPressed}
            color="#48BBEC"
            title="Go"/>
        </View>
        <Image source={require('../assets/img/house.png')}
          style={styles.image}/>
        {
          spinner
        }
      </View>
    )
  }
}