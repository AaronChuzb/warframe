/*
 * @Date: 2021-09-23 17:01:23
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-23 17:01:25
 */
module.exports = {
  productionSourceMap: false,
  configureWebpack: config => {
    return {
      optimization: {
        minimize: true
      }
    }
  }
}