import { createApp } from 'vue'
import App from './App.vue'
import TodoHttpGateway from './gateways/TodoHttpGateway'
import AxiosHttpClient from './infra/AxiosHttpClient'

const app = createApp(App)
const httpClient = new AxiosHttpClient()
const todoGateway = new TodoHttpGateway(httpClient, "http://localhost:3000");
app.provide("todoGateway", todoGateway)
app.mount('#app')
