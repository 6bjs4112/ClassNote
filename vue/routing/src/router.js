import { createRouter, createWebHistory } from "vue-router";
import HomeView from './pages/HomeView.vue'
import ListView from './pages/ListView.vue'
import ClassView from './pages/ClassView.vue'

const routes = [
    {path:'/', name:'HomeView', component:HomeView},
    {path:'/list', name:'ListView', component:ListView},
    {path:'/class/:name', name:'ClassView', component: ClassView}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export {router};