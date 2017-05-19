import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { Icon } from 'react-native-elements';


class DummyComponent extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerRight: <Icon type='ionicon'
      name='ios-glasses-outline'
      size={30}
      onPress={()=>{ navigation.navigate('Settings'); }}
      style={{ marginRight: 10, padding: 5}}
      underlayColor='yellow'
    />
    // headerRight: <Button title="Menu" onPress={()=>{ navigation.navigate('Settings'); }} />,
  });

  constructor(props) {
    super(props);

    this.showModal = this.showModal.bind(this);
  }

  showModal() {
    console.log("here");
    this.props.navigation.navigate('Settings');
  }

  render() {
    console.log("in dummy render");
    return (
      <View style={styles.container}>
        <Button title="Push View" onPress={() => this.props.navigation.navigate('Feed')} />
        <Text style={styles.welcome}>
          Welcome to DummyComponent!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = DummyComponent;
