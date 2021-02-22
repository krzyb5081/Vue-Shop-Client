var app = new Vue({
    el: '#app',
    data:{
        name: 'gracjan',
        lastname: 'roztocki',
        message: 'Hello swiat ffs <3',
        appActive: false
    },
    methods:{
        getFullName: function(){
            return this.name+" "+this.lastname
        },
        setActive: function(){
            if(this.appActive){
                this.appActive = false
            }
            else{
                this.appActive = true
            }
        }
    }
})