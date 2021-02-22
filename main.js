var app = new Vue({
    el: '#app',
    data:{
        name: '',
        lastname: '',
        message: 'Hello swiat ffs <3'
    },
    computed:{
        getFullName: function(){
            return this.name+" "+this.lastname
        }
    }
})