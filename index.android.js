/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import { ResultPage } from './src/components/ResultPage';
import Header from './src/components/Header';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class resultPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header 
          headerStyle={styles.headerStyle} 
          headerText='ResultBoard' 
          headerTextStyle={styles.headerTextStyle}
        />
        {/* <ResultPage /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  headerStyle: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#B45306',
  },
  headerTextStyle: {
    fontSize: 15,
    color: '#fff'
  }
});

AppRegistry.registerComponent('resultPage', () => resultPage);
