/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
// import axios from 'axios';
import Header from './src/components/Header';
import ResultBoard from './src/components/ResultPage';
import ListingPage from './src/components/ListingPage';

export default class resultPage extends Component {
  // componentWillMount() {
  //   axios('https://rallycoding.herokuapp.com/api/music_albums')
  //     .then(response => console.log(response)); 
  // }
  render() {
    return (
      <View style={styles.container}>
        {/* <Header
          headerStyle={styles.headerStyle}
          headerText='ListingPage'
          headerTextStyle={styles.headerTextStyle}
        /> */}
        <ListingPage />
        {/* <ResultBoard /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  headerStyle: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#B45306'
  },
  headerTextStyle: {
    fontSize: 15,
    color: '#fff'
  }
});

AppRegistry.registerComponent('resultPage', () => resultPage);
