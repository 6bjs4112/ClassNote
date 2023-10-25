import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'

const app = createApp(App)
app.use(router);//mount보다 위에 있어야 함
app.mount('#app');