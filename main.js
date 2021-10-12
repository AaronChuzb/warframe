/*
 * @Date: 2021-09-20 01:55:52
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-10-12 14:09:25
 */
import Vue from 'vue'
import App from './App'
import uView from "uview-ui";

import LazyImage from './components/LazyImage'

Vue.use(uView);

Vue.component('lazy-image', LazyImage)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
