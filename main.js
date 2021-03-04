var router = new VueRouter({
    routes:[
        { path: '*', redirect: '/'},
        { path: '/', component: {template: '<index-template></index-template>'} },
        { path: '/shopping', component: {template: '<shopping-template></shopping-template>'} },
        { path: '/addProduct', component: {template: '<add-product-template></add-product-template>'} },
        { path: '/showShoppingCart', component: {template: '<show-shopping-cart-template></show-shopping-cart-template>'} },
        { path: '/showProducts', component: {template: '<show-products-template></show-products-template>'} }
    ]
})

var app = new Vue({
    el: '#app',
    router,
    data: {
        name: 'twoj stary'
    }
})