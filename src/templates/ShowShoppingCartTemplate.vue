<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data: function(){
        return {
            orderProductList: {},
            user: {},
            orderCost: 0
        }
    },
    methods:{
        makeOrder: async function(){
            this.getSessionUser();
            let message = '';
            await axios.get('http://localhost:8080/makeOrder', {withCredentials: true}).then(response => message = response.data);
            
            if(message != "Order made"){
                alert(message);
            }
        },
        getOrderProductList: async function(){
            await axios.get('http://localhost:8080/showShoppingCart', {withCredentials: true})
            .then(resp => {this.orderProductList = resp.data});
        },
        getSessionUser: async function(){
            await axios.get('http://localhost:8080/getSessionUser', {withCredentials: true}).then(resp => {this.user = resp.data})
        },
        getOrderCost: async function(){
            await axios.get('http://localhost:8080/getOrderCost', {withCredentials: true}).then(resp => {this.orderCost = resp.data})
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

            this.getOrderCost();

        },
        removeOrderProduct: async function(orderProduct){
            var formData = new FormData();
            formData.append('productId', parseInt(orderProduct.product.id));

            await axios.post("http://localhost:8080/removeProductFromCart", formData, {withCredentials: true});

            this.orderProductList = this.orderProductList.filter(prod => prod.product.id !== orderProduct.product.id);

            this.getOrderCost();
        }
    },
    mounted(){
        this.getOrderProductList();
        this.getSessionUser();
        this.getOrderCost();
    }
})
</script>

<template>
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
                    <input type = "number" @change='changeQuantity(orderProduct)' v-model='orderProduct.quantity'>
                    <button @click='removeOrderProduct(orderProduct)'>Remove</button>
                </td>
            </tr>
        </table>
        <span v-if="$store.state.logged === true">Your money: {{user.money}}<br></span>
        
        <span v-else>To pay and make order you have to <router-link to="/login"><button class="btn btn-primary">Log in</button></router-link><br></span>
        Order cost: {{orderCost}}<br>
        <span v-if="$store.state.logged === true"><button @click="makeOrder()" class="btn btn-primary">Make order</button><br></span>

    </div>
</template>