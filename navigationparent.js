'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
  LayoutAnimation,
  ListView,
} from 'react-native';

/*We get our various component files here*/
var LandingPage = require('./landingpage');
var DetailPage = require('./detailpage');
var WebViewPage = require('./webviewpage');
var ListViewPage = require('./listviewpage');
/*
The menu array holds the dictionaries with 'Titles'
that will show up as text in our drawer menu and then
the components to be rendered when they're selected.
*/

var NavigationParent = React.createClass({
  getInitialState() {
    /* Assign the initial state of the app and setup the menu options as a
    listview data source.*/
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      menuShowing: false,
      menuWidth: 0,
      menuShadowWidth: 0,
      currentPage: <LandingPage/>,
      dataSource: ds.cloneWithRows(menuArray),
    };
  },
  _onMenuPress() {
    /* When user presses the menu toggle this animates
     the menu in and out of the view */
    if(this.state.menuShowing){
      this.setState({menuWidth: 0, menuShadowWidth: 0, menuShowing: false});
    }
    else{
      this.setState({menuWidth: 200, menuShadowWidth: 2,  menuShowing: true});
    }
    LayoutAnimation.easeInEaseOut();
  },
  _onMenuItemPress(view){
    /* When the user selects a menu item this will
     close the menu drawer and change the view */
    LayoutAnimation.easeInEaseOut();
    this.setState({menuWidth:0, menuShadowWidth:0,
       menuShowing: false, currentPage: view});
  },
  _renderRow(rowData, sectionID, rowID) {
    /* defines how the menu list will render */
    return (
      <TouchableHighlight underlayColor='#999999'
        style={styles.menuTouchable}
        onPress={() => this._onMenuItemPress(rowData.component)}>
         <Text style={styles.menuItem}>{rowData.title}</Text>
      </TouchableHighlight>
    );
  },
  render () {
    return (
      <View style={styles.container}>
        {/* defines how the navigation bar will render */}
        <View style={styles.navBar}>
          <Text style={styles.title}></Text>
          <TouchableHighlight underlayColor='#183E63'
            onPress={this._onMenuPress}
            style={styles.menuButton}>
            <Image source={require('./ic_burger_44px.png')}
              style={styles.icon}/>
          </TouchableHighlight>
        </View>
        <View style={styles.navShadow}></View>
        {/* state defines the current view here */}
        {this.state.currentPage}
        {/* slide out menu drawer defined here */}
        <View style={[styles.menuContainer, {width: this.state.menuWidth}]}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
          />
          <View style={[styles.menuShadow, {width: this.state.menuShadowWidth}]}/>
        </View>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    height: 68,
    backgroundColor: '#fffff0',
    opacity: .75,
  },
  navShadow: {
    height: .5,
    backgroundColor: '#000000',
    opacity: 1,
  },
  title: {
    top: 30,
    fontSize: 25,
    color: '#000000',
    alignSelf: 'center',
  },
  menuButton: {
    position: 'absolute',
    height: 30,
    top: 30,
    right: 10,
  },
  menuShadow: {
    backgroundColor: '#000000',
    opacity: 0.3,
  },
  menuContainer:{
    flex: 1,
    position: 'absolute',
    top: 68,
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#183E63',
    opacity: .96,
  },
  menuTouchable:{
    paddingTop: 10,
    paddingBottom: 10,
  },
  menuItem: {
    paddingLeft: 30,
    fontSize: 20,
    color: '#ffffff',
  },
  icon: {
    top:-10,
    width:50,
    height:50,
  },
});

module.exports = NavigationParent;
