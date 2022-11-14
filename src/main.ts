import Vue from 'vue';
import App from './App.vue';
import { Button } from 'element-ui';
import RSButton from './lib/RSButton';

Vue.use(Button)

Vue.component('rs-button', RSButton)

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
