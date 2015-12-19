/*
 * 应用程序入口
 * @Author: iceStone
 * @Date:   2015-12-06 15:21:47
 * @Last Modified by:   iceStone
 * @Last Modified time: 2015-12-06 21:07:15
 */

'use strict';

import React from 'react-native';

import Welcome from './Components/Welcome';

const {
  StyleSheet,
  Text,
  View,
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    if(true){
      return(<Welcome></Welcome>);
    }
    return (
      <View style={styles.container}>
        <Text>OK</Text>
      </View>
    );
  }
}
