import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View
      style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}}
      >
        <View style={{height: 50, backgroundColor: '#b43816'}} />
        <View style={{height: 100, backgroundColor: 'skyblue'}} />
        <View style={{height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
