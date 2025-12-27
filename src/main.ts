import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import App from './App.vue'
import LoginForm from './components/LoginForm.vue'
import router from './router'

const app = createApp(LoginForm)

app.use(createPinia())
app.use(router)

app.mount('#app')