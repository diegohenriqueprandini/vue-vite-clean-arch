import { createApp } from 'vue'
import App from './App.vue'
import AxiosHttpClient from './infra/AxiosHttpClient'

const app = createApp(App)
const httpClient = new AxiosHttpClient()
app.provide("httpClient", httpClient)
app.mount('#app')
