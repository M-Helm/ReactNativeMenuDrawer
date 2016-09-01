
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

let NavigationParent = require('./navigationparent');

class ReactNativeMenuDrawer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationParent></NavigationParent>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('ReactNativeMenuDrawer', () => ReactNativeMenuDrawer);
