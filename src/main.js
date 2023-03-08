import { createApp } from 'vue'
import Vuex from 'vuex'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import './assets/main.css'

import IndexTemplate from "./templates/IndexTemplate.vue"
import ShoppingTemplate from "./templates/ShoppingTemplate.vue"
import AddProductTemplate from "./templates/AddProductTemplate.vue"
import ShowShoppingCartTemplate from "./templates/ShowShoppingCartTemplate.vue"
import ShowProductsTemplate from "./templates/ShowProductsTemplate.vue"
import ShowOrdersTemplate from "./templates/ShowOrdersTemplate.vue"
import LoginUserTemplate from "./templates/LoginUserTemplate.vue"
import RegisterUserTemplate from "./templates/RegisterUserTemplate.vue"

var routes = [
    { path: '/*', redirect: '/' },
    { path: '/', component: IndexTemplate },
    { path: '/shopping', component: ShoppingTemplate },
    { path: '/addProduct', component: AddProductTemplate },
    { path: '/showShoppingCart', component: ShowShoppingCartTemplate },
    { path: '/showProducts', component: ShowProductsTemplate },
    { path: '/showOrders', component: ShowOrdersTemplate },
    { path: '/login', component: LoginUserTemplate },
    { path:'/register', component: RegisterUserTemplate }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

const store = new Vuex.Store({
    state: {
        logged: false,
        userName: ''
    },
    mutations: {
        login(state, name){
            state.logged = true;
            state.userName = name; 
        },
        logout(state){
            state.logged = false;
            state.userName = '';
        }
    }
})

var app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
