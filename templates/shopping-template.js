Vue.component("shopping-template",{
    template:`
        <div>
            <form @submit.prevent="search()">
                <input type="text" v-model="searchText" name="searchText" placeholder="product name" />
                <input type="submit" value="Search" />
            </form>

            <table>
                <tr>
                    <th>Product name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Available</th>
                    <th>Add to cart</th>
                </tr>
                
                <tr v-for="product in products">
                    <td> {{product.name}} </td>
                    <td> {{product.description}} </td>
                    <td> {{product.price}} </td>
                    <td> {{product.quantityAvailable}} </td>

                    <td> <button @click="addToCart(product, $event)">Add to cart</button> </td>
                </tr>
            </table>
        </div>
    `,
    data: function(){
        return {
            products: {},
            searchText: '',
        }
    },
    methods:{
        getProducts: async function(){
            let response = await axios.get('http://localhost:8080/shopping', {withCredentials: true})
            .then(resp => {this.products = resp.data});
        },
        search: async function(){

            var formData = new FormData();
            formData.append('searchText', this.searchText);

            await axios.post('http://localhost:8080/shopping', formData, {withCredentials: true})
            .then(resp => {this.products = resp.data});

            this.searchText = null;
        },
        addToCart: async function(product, event){
            var formData = new FormData();
            formData.append('productId', parseInt(product.id));
            formData.append('quantity', 1);

            await axios.post("http://localhost:8080/addProductToCart", formData, {withCredentials: true})

            event.target.textContent = "Product added to cart";
        }
    },
    mounted(){
        this.getProducts();
    }
})