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
                    <th>Buy</th>
                </tr>
                
                <tr v-for="product in products">
                    <td> {{product.name}} </td>
                    <td> {{product.description}} </td>
                    <td> {{product.price}} </td>
                    <td> {{product.quantityAvailable}} </td>
                    
                    <td>
                        <add-to-cart v-bind:product-id="product.id"></add-to-cart>
                    </td>
                </tr>
            </table>
        </div>
    `,
    data: function(){
        return {
            products: {},
            searchText: '',
            productId: null,
            quantity: null
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
        }
    },
    components: {
        'addToCart':{
            data: function(){
                return{
                    quantity: null
                }
            },
            props:{
                productId: Number
            },
            template:`
                <div>
                    <button @click="addToCart()">Add to cart</button>
                </div>
            `,
            methods:{
                addToCart: async function(){
                    var formData = new FormData();
                    formData.append('productId', this.productId);
                    formData.append('quantity', 1);

                    await axios.post("http://localhost:8080/addProductToCart", formData, {withCredentials: true})
                }
            }
        }
    }
    ,
    mounted(){
        this.getProducts();
    }
})
//<form action="#" th:action="@{/shopping}" method="post">
//<form action="#" th:action="@{/addProductToCart}" method="post">