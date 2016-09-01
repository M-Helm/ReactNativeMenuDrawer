'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

class DetailPage extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Here are some details!
        </Text>
      </View>
    );
  }
};

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

module.exports = DetailPage;
