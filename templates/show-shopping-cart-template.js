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
                
                <tr v-for="product in products" v-bind:product="product" v-bind:key="product.product.id">
                    <td> {{product.product.name}} </td>
                    <td> {{product.product.description}} </td>
                    <td> {{product.product.price}} </td>
                    <td> {{product.product.quantityAvailable}} </td>
                    <td> {{product.quantity}} </td>
                    
                    <td>
                        <div>
                            <button @click='changeQuantity(product,"+")'>+</button>
                            <button @click='changeQuantity(product,"-")'>-</button>
                            <button @click='removeProduct(product)'>Remove</button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    `,
    data: function(){
        return {
            products: {},
        }
    },
    methods:{
        getProducts: async function(){
            let response = await axios.get('http://localhost:8080/showShoppingCart', {withCredentials: true})
            .then(resp => {this.products = resp.data});
        },
        changeQuantity: async function(product, operation){

            if(operation === "-"){
                product.quantity--;
            } else if(operation === "+"){
                product.quantity++;
            }
            var formData = new FormData();

            formData.append('productId', parseInt(product.product.id));
            formData.append('quantity', parseInt(product.quantity));

            await axios.post("http://localhost:8080/addProductToCart", formData, {withCredentials: true});

        },
        removeProduct: async function(product){
            var formData = new FormData();

            formData.append('productId', parseInt(product.product.id));

            await axios.post("http://localhost:8080/removeProductFromCart", formData, {withCredentials: true});

            this.products = this.products.filter(prod => prod.product.id !== product.product.id)

        }
    },
    mounted(){
        this.getProducts();
    }
})