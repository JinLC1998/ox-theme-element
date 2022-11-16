import Vue from 'vue';
import App from './App.vue';
import { Button, Table } from 'element-ui';
import RSButton from './lib/RSButton';
import RSTable from './lib/RSTable'

Vue.use(Button)
Vue.use(Table)

Vue.component('rs-button', RSButton)
Vue.component('rs-table', RSTable)

Vue.config.productionTip = false;

new Vue({
  components: { Button },
  render: (h) => h(App),
}).$mount('#app');
