'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Platform,
  TouchableHighlight,
  NavigatorIOS,
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    top: 69,
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    top: 100,
    textAlign: 'center',
    color: '#656565'
  },
});

var LandingPage = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Landing Page!
        </Text>
      </View>
    );
  }
});

module.exports = LandingPage;
