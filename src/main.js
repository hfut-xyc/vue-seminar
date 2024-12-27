import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/index.js'
import store from '@/store/index.js'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css';
// import VeLine from 'v-charts/lib/line.common.js'
// import VePie from 'v-charts/lib/pie.common.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.component(VeLine)
// Vue.component(VePie)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})
