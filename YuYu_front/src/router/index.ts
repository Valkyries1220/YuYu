import { createRouter, createWebHistory} from 'vue-router';
import Home from '../views/index.vue'; 

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { title: '首页' } 
    },
];

// 创建路由实例（使用 HTML5 History 模式）
const router = createRouter({
    history: createWebHistory(), 
    routes
});

export default router;
  

