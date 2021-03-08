var router = new VueRouter({
    routes:[
        { path: '*', redirect: '/'},
        { path: '/', component: {template: '<index-template></index-template>'} },
        { path: '/shopping', component: {template: '<shopping-template></shopping-template>'} },
        { path: '/addProduct', component: {template: '<add-product-template></add-product-template>'} },
        { path: '/showShoppingCart', component: {template: '<show-shopping-cart-template></show-shopping-cart-template>'} },
        { path: '/showProducts', component: {template: '<show-products-template></show-products-template>'} },
        { path: '/login', component: {template: '<login-user-template></login-user-template>'} },
        { path: '/register', component: {template: '<register-user-template></register-user-template>'} }
    ]
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

var app = new Vue({
    el: '#app',
    router,
    store,
    mounted(){
        let user = {};
        axios.get('http://localhost:8080/getSessionUser', {withCredentials: true}).then(resp => {user = resp.data});

        if(user.userName == null){
            this.$store.state.logged = false; 
            this.$store.state.userName = '';
        }
        else {
            this.$store.state.logged = true; 
            this.$store.state.userName = user.userName;
        }
        
        
    }
})