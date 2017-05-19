import React from 'react';

import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from '../screens/Feed';
import DummyComponent from '../screens/dummy';
import Settings from '../screens/settings';

const tintColor = 'yellow';

export const FeedStack = StackNavigator({
  Dummy: {
    screen: DummyComponent,
    navigationOptions: {
      title: 'Dummy',
    }
  },
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
    }
  },
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
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={25} color={tintColor} />
    }
  },
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
