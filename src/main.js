import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { registerSW } from 'virtual:pwa-register';
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

const updateSW=registerSW({
  onNeedRefresh(){
    let a=confirm("Eine neue Version ist verfügbar. Willst du aktualisieren (empfohlen!)?");
    if(a){
      updateSW();
    }
  },
  onOfflineReady(){
    console.log("offline ready");
  }
});
export const updateServiceWorker=updateSW;