Vue.component("shopping-template",{
    template:`
        <div>
            <p>{{ data }}</p>
        </div>
    `,
    data: function(){
        return {
            data: null
        }
    },
    mounted(){
        axios.get("localhost:8080/shopping").then(response => {this.data = response});
    }
})