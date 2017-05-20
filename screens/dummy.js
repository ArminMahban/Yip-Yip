import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { Icon } from 'react-native-elements';


class DummyComponent extends Component {


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
        <Button title="Push View" color='white' onPress={() => this.props.navigation.navigate('Feed')} />
        <Text style={styles.welcome}>
          Welcome to DummyComponent!
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
    backgroundColor: '#333343',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = DummyComponent;
