/*
 * Android平台项目入口
 * @Author: iceStone
 * @Date:   2015-12-06 15:46:37
 * @Last Modified by:   iceStone
 * @Last Modified time: 2015-12-06 16:01:32
 */
'use strict';

import {
  AppRegistry
}
from 'react-native';
import App from './app/App';


AppRegistry.registerComponent('Weibo', () => App);
