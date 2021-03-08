Vue.component('add-product-template',{
    template: `
        <div>
            <h1>add new product</h1>
            <form v-on:submit.prevent="addProduct()">
                Product name:<br>
                <input type="text" v-model="name" placeholder="product name" /><br>
                Description:<br>
                <input type="text" v-model="description" placeholder="product description" /><br>
                Price:<br>
                <input type="number" step="0.01" v-model="price" placeholder="0" /><br>
                Quantity available to sell:<br>
                <input type="number" step="1" v-model="quantityAvailable" placeholder="0" /><br>
                <input type="submit" value="Add product" />
            </form>
        </div>
    `,
    data: function(){
        return{
            name: '',
            description: '',
            price: 0,
            quantityAvailable: 0
        }
    },
    methods:{
        addProduct: async function(){
            var formData = new FormData();
            formData.append('name', this.name);
            formData.append('description', this.description);
            formData.append('price', this.price);
            formData.append('quantityAvailable', this.quantityAvailable);

            await axios.post("http://localhost:8080/addProduct", formData, {withCredentials: true});
            
            this.name = '';
            this.description = '';
            this.price = 0;
            this.quantityAvailable = 0;
            
            alert(this.name+" added to product list");
        }
    }

})