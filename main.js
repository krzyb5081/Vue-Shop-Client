var router = new VueRouter({
    routes:[
        { path: '/', component: {template: '<index-template></index-template>'} },
        { path: '*', redirect: '/'},
        { path: '/sidebar', component: {template: '<sidebar-template></sidebar-template>'} },
        { path: '/bunny', component: {template: '<div><img src="bunny.png" style="height: 100%; width: 100%; object-fit: fill;"></div>"'} }
    ]
})

var app = new Vue({
    el: '#app',
    router,
    data: {
        name: 'twoj stary'
    }
})