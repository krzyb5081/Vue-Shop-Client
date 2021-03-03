Vue.component("show-shopping-cart-template",{
    template:`
        <div>
            <table>
                <tr>
                    <th>Product name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Available</th>
                    <th>Amount wanted</th>
                </tr>
                
                <tr v-for="product in products">
                    <td> {{product.product.name}} </td>
                    <td> {{product.product.description}} </td>
                    <td> {{product.product.price}} </td>
                    <td> {{product.product.quantityAvailable}} </td>
                    <td> {{product.quantity}} </td>
                    
                    <td>
                        <add-to-cart v-bind:product-id="product.product.id"></add-to-cart>
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
            let response = await axios.get('http://localhost:8080/showShoppingCart', {withCredentials: true})
            .then(resp => {this.products = resp.data});
        }
    },
    components: {
        'addToCart':{
            data: function(){
                return{
                    quantity: Number
                }
            },
            props:{
                productId: Number
            },
            template:`
                <div>
                    <form @submit="changeQuantity()">
                        <input type="number" step="1" v-model="quantity">
                        <input type="submit" value="Change amount">
                    </form>
                </div>
            `,
            methods:{
                changeQuantity: async function(){
                    var formData = new FormData();
                    formData.append('productId', this.productId);
                    formData.append('quantity', this.quantity);

                    await axios.post("http://localhost:8080/addProductToCart", formData, {withCredentials: true});
                    
                    this.$router.push("/showShoppingCart");
                }
            }
        }
    }
    ,
    mounted(){
        this.getProducts();
    }
})