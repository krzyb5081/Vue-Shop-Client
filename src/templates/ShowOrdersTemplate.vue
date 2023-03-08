<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data: function(){
        return {
            orderList: {},
        }
    },
    methods:{
        getOrderList: async function(){
            let response = await axios.get('http://localhost:8080/showOrders', {withCredentials: true})
            .then(resp => {this.orderList = resp.data});
        }
    },
    mounted(){
        this.getOrderList();
    }
})
</script>

<template>
    <div>
        <H2>Feature under construction</H2>
        <table>
            <tr>
                <th>Id</th>
                <th>Status</th>
            </tr>
            
            <tr v-for="order in orderList" v-bind:key="order.id">
                <td>
                    <input type = "text" v-model='order.id'>
                </td>
                <td>
                    <input type = "text"  v-model='order.status'>
                </td>
            </tr>
        </table>
    </div>
</template>

<!-- example order from orderList
    Order:
        {
        "id":28,
        "status":"paid",
        "orderProductList":
        [
            {
                "id":29,
                "quantity":1,
                "product":
                {
                    "id":2,
                    "name":"komoda",
                    "description":"drewniana komoda",
                    "price":25.99,
                    "quantityAvailable":26
                }
            },
            {
                "id":30,
                "quantity":1,
                "product":
                {
                    "id":3,
                    "name":"diesel efecta",
                    "description":"drogie paliwo",
                    "price":2.43,
                    "quantityAvailable":55236
                }
            }
        ]
    }
-->