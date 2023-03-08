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
        <h3>Feature under construction</h3>
        <table>
            <tr>
                <th>Id</th>
                <th>Status</th>
            </tr>
            
            <tr v-for="order in orderList" v-bind:key="order.id">
                <td>
                    <span>{{ order.id }}</span>
                    
                </td>
                <td>
                    <span>{{ order.status }}</span>
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