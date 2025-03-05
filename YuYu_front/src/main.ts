import { createApp } from 'vue' 
import { createPinia } from 'pinia' //引入pinia
import 'element-plus/dist/index.css' //导入element-plus样式
import router from './router'; // 引入路由配置

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

app.mount('#app')
