/*
 * @Author: iceStone
 * @Date:   2015-12-06 21:09:56
 * @Last Modified by:   iceStone
 * @Last Modified time: 2015-12-06 23:10:19
 * https://facebook.github.io/react-native/docs/pixelratio.html
 */

'use strict';

import { PixelRatio } from 'react-native';

export default {
  indexPic:(function () {
    var dpr = PixelRatio.get();
    if (1 === dpr) {
      return require('image!index-pic_1x');
    } else if (2 === dpr) {
      return require('image!index-pic_2x');
    }
    return require('image!index-pic_3x');
  })(),
};
