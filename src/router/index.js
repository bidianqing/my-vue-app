import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Index from '@/views/index.vue'
import About from '@/views/about.vue'
import NotFound from '@/views/404.vue'
import Login from '@/views/login.vue'
import News from '@/views/news.vue'

const routes = [
    {
        path: '/',
        component: Layout
    },
    {
        path: '/:pathMatch(.*)*',
        name: NotFound,
        component: NotFound
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/hello',
        component: Layout,
        children: [
            {
              path: '',
              component: HelloWorld
            }
        ]
    },
    {
        path: '/about',
        component: Layout,
        children: [
            {
              path: '/about',
              component: About
            }
        ]
    },
    {
        path: '/news',
        component: Layout,
        children: [
            {
              path: '/news',
              component: News
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router