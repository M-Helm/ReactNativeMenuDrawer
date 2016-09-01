'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  WebView,
  TouchableHighlight,
} from 'react-native';

var WebViewPage = React.createClass({
  render() {
    return (
      <WebView
        source={{uri: 'https://facebook.github.io/react-native/versions.html'}}
        startInLoadingState={true}
      />
    );
  }
});

const styles = StyleSheet.create({
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

module.exports = WebViewPage;
