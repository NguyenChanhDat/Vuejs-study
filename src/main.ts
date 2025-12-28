import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import App from './App.vue'
// import LoginForm from './components/LoginForm.vue'
import CreateUserForm from './components/CreateUserForm.vue'
import router from './router'

const app = createApp(CreateUserForm)

app.use(createPinia())
app.use(router)

app.mount('#app')
