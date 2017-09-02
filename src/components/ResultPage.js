import React from 'react';
import { View } from 'react-native';
import PickerExample from './picker.js';


const ResultBoard = () => {
  return (
    <View style={styles.containerStyle}>
      <PickerExample />
    </View>
  ); 
};

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};
export default ResultBoard;
