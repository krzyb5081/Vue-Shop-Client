Vue.component("shopping-template",{
    template:`
        <div>
            <p>{{ data }}</p>
        </div>
    `,
    name: "shopping-t",
    data: function(){
        return {
            data: {}
        }
    },
    methods:{
        getData: async function(){
            let response = await axios.get('http://localhost:8080/shopping')
            .then(resp => {this.data = resp.data});
        }
    },
    mounted(){
        this.getData();
    }
})