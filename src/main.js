import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // Importa o router

createApp(App)
  .use(router)  // Registra o Vue Router na aplicação
  .mount('#app')  // Monta a aplicação no elemento com o id 'app'
