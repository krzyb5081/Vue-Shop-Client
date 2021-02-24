var router = new VueRouter({
    routes:[
        { path: '/sidebar', component: {template: '<sidebar-template></sidebar-template>'} },
        { path: '/bunny', component: {template: '<div><img src="bunny.png" style="height: 100%; width: 100%; object-fit: contain;></div>"'} },
        { path: '*', redirect: '/sidebar'}
    ]
})

var app = new Vue({
    el: '#app',
    router,
    data: {
        name: 'twoj stary'
    }
})