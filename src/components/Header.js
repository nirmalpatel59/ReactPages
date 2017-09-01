import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  return (
    <View style={props.headerStyle}>
      <Text style={props.headerTextStyle}>{props.headerText}</Text>
    </View>
  );
};

export default Header;
