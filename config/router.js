import React from 'react';

import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Feed from '../screens/Feed';
import DummyComponent from '../screens/dummy';
import Settings from '../screens/settings';

const tintColor = 'yellow';

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

const DummyHerd = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to DummyHerd!
      </Text>
    </View>
  );
};

const DummySearch = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to DummySearch!
      </Text>
    </View>
  );
};

export const FeedStack = StackNavigator({
  Dummy: {
    screen: DummyComponent,
    navigationOptions: {
      title: 'DummyFeed',
    }
  },
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
    }
  },
})

export const HerdStack = StackNavigator({
  DummyHeard: {
    screen: DummyHerd,
    navigationOptions: {
      title: 'DummyHeard',
    }
  }
})

export const SearchStack = StackNavigator({
  DummySearch: {
    screen: DummySearch,
    navigationOptions: {
      title: 'DummySearch',
    }
  }
})

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    }
  }
})

export const Tabs = TabNavigator({
  FeedTab: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => <Icon type='ionicon' name='ios-navigate-outline' size={25} color={tintColor} />
    }
  },
  HerdTab: {
    screen: HerdStack,
    navigationOptions: {
      tabBarLabel: 'Herd',
      tabBarIcon: ({ tintColor }) => <Icon type='ionicon' name='ios-ionic-outline' size={25} color={tintColor} />
    }
  },
  SearchTab: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => <Icon type='ionicon' name='ios-search' size={25} color={tintColor} />
    }
  }
});


export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
})
