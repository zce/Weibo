/*
 * 欢迎界面
 * @Author: iceStone
 * @Date:   2015-12-06 20:47:18
 * @Last Modified by:   iceStone
 * @Last Modified time: 2015-12-06 23:26:17
 * {uri:'https://passport.weibo.cn/images/weibo/signin/index-pic_2x.png'}
 */

'use strict';

import React from 'react-native';
const { Image, StyleSheet, Text, View } = React;

import images from '../Resources/Images';

let indexPic = images.indexPic;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    flex: 1
  },
  indexPic:{
    height: indexPic.height,
    width: indexPic.width
  }
});

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    console.log();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('image!index-pic_2x')} style={styles.indexPic}></Image>
      </View>
    );
  }
}
