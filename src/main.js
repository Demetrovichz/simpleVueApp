import { createApp } from 'vue'
import App from './App.vue'
import component from '@/components/UI/index'
console.log(component)
const app = createApp(App)
component.forEach(comp=>{
  app.component(comp.name, comp)
})
app.mount('#app')
