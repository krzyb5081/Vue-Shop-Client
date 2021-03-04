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
                
                <tr v-for="orderProduct in orderProductList" v-bind:key="orderProduct.product.id">
                    <td> {{orderProduct.product.name}} </td>
                    <td> {{orderProduct.product.description}} </td>
                    <td> {{orderProduct.product.price}} </td>
                    <td> {{orderProduct.product.quantityAvailable}} </td>
                    
                    <td>
                        <input type = "number" @change='changeQuantity(orderProduct)' v-model:value='orderProduct.quantity'>
                        <button @click='removeOrderProduct(orderProduct)'>Remove</button>
                    </td>
                </tr>
            </table>
        </div>
    `,
    data: function(){
        return {
            orderProductList: {},
        }
    },
    methods:{
        getOrderProductList: async function(){
            let response = await axios.get('http://localhost:8080/showShoppingCart', {withCredentials: true})
            .then(resp => {this.orderProductList = resp.data});
        },
        changeQuantity: async function(orderProduct){

            if(orderProduct.quantity < 1){
                orderProduct.quantity = 1;
            }
            if(orderProduct.quantity > orderProduct.product.quantityAvailable){
                orderProduct.quantity = orderProduct.product.quantityAvailable;
            }
            
            var formData = new FormData();

            formData.append('productId', parseInt(orderProduct.product.id));
            formData.append('quantity', parseInt(orderProduct.quantity));

            await axios.post("http://localhost:8080/addProductToCart", formData, {withCredentials: true});

        },
        removeOrderProduct: async function(orderProduct){
            var formData = new FormData();

            formData.append('productId', parseInt(orderProduct.product.id));

            await axios.post("http://localhost:8080/removeProductFromCart", formData, {withCredentials: true});

            this.orderProductList = this.orderProductList.filter(prod => prod.product.id !== orderProduct.product.id)

        }
    },
    mounted(){
        this.getOrderProductList();
    }
})