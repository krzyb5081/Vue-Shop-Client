Vue.component("show-shopping-cart-template",{
    template:`
        <div>
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
            let response = await axios.get('http://localhost:8080/showShoppingCart')
            .then(resp => {this.products = resp.data});
        }
    },
    components: {
        'addToCart':{
            data: function(){
                return{
                    productId: null,
                    quantity: null
                }
            },
            props:['productIdProp'],
            template:`
                <div>
                    <form @submit.prevent="changeQuantity()">
                        {{productId=productIdProp}}
                        <input type="number" step="1" v-model="quantity">
                        <input type="submit" >Change amount</button>
                    </form>
                </div
            `,
            methods:{
                changeQuantity: async function(){
                    var formData = new FormData();
                    formData.append('productId', this.productId);
                    formData.append('quantity', this.quantity);

                    let response = await axios.post("http://localhost:8080/addProductToCart", formData)
                }
            }
        }
    }
    ,
    mounted(){
        this.getProducts();
    }
})