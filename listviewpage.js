import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  Text,
  View,
  StyleSheet,
} from 'react-native';

class ListViewPage extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'List Item 0',
        'List Item 1',
        'List Item 2',
        'List Item 3',
        'List Item 4',
        'List Item 5',
        'List Item 6',
        'List Item 7',
        'List Item 8'
      ])
    };
  }
  render() {
    return (
      <View style={styles.listTouchable}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style = {styles.listItem}>{rowData}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listTouchable:{
    paddingTop: 10,
    paddingBottom: 10,
  },
  listItem: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'left',
    color: '#656565'
  },
});

module.exports = ListViewPage;
