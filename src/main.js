import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
const app=createApp(App);
app.use(PrimeVue);

app.mount('#app')

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './style.css';

window.onpopstate=function(){
  history.pushState({},'',window.location.toString());
};

history.pushState({},'',window.location.toString());