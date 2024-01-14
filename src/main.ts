import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Tooltip from 'primevue/tooltip';


import App from './App.vue'
import router from './router'
import 'primevue/resources/themes/lara-light-green/theme.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.directive('tooltip', Tooltip);
// app.component('Button', Button);

app.mount('#app')
