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
        <h3>Every order list</h3>
        <table class="table table-dark">
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Status</th>
                <th scope="col">Customer</th>
                <th scope="col">Ordered stuff</th>
            </tr>
            
            <tr v-for="order in orderList" v-bind:key="order.id">
                <td>
                    <span>{{ order.id }}</span>
                    
                </td>
                <td>
                    <span>{{ order.status }}</span>
                </td>
                <td>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">user name</th>
                    </tr>
                    <tr>
                        <td>
                            <span>{{ order.user.id }}</span>
                        </td>
                        <td>
                            <span>{{ order.user.userName }}</span>
                        </td>
                    </tr>
                </td>
                <td>
                    <tr>
                        <th scope="col">Quantity</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                    </tr>
                    <tr v-for="orderPart in order.orderPartList" v-bind:key="orderPart.id">
                        <td>{{ orderPart.quantity }}</td>
                        <td>{{ orderPart.product.name }}</td>
                        <td>{{ orderPart.product.description }}</td>
                        <td>{{ orderPart.product.price }}</td>
                    </tr>
                </td>
            </tr>
        </table>
    </div>
</template>

<!-- example orderList
[
    {
        "id": 4,
        "status": "not paid",
        "user": {
            "id": 1,
            "userName": "user22",
            "password": "user22password",
            "type": "user",
            "money": 50.0
        },
        "orderPartList": [
            {
                "id": 5,
                "quantity": 1,
                "product": {
                    "id": 3,
                    "name": "Blue paint",
                    "description": "blue",
                    "price": 2.6,
                    "quantityAvailable": 51
                }
            }
        ]
    },
    {
        "id": 7,
        "status": "not paid",
        "user": {
            "id": 6,
            "userName": "user1",
            "password": "user1",
            "type": "user",
            "money": 50.0
        },
        "orderPartList": [
            {
                "id": 8,
                "quantity": 2,
                "product": {
                    "id": 2,
                    "name": "Red paint",
                    "description": "red",
                    "price": 2.55,
                    "quantityAvailable": 28
                }
            }
        ]
    },
    {
        "id": 9,
        "status": "not paid",
        "user": {
            "id": 6,
            "userName": "user1",
            "password": "user1",
            "type": "user",
            "money": 50.0
        },
        "orderPartList": [
            {
                "id": 10,
                "quantity": 3,
                "product": {
                    "id": 2,
                    "name": "Red paint",
                    "description": "red",
                    "price": 2.55,
                    "quantityAvailable": 28
                }
            },
            {
                "id": 11,
                "quantity": 5,
                "product": {
                    "id": 3,
                    "name": "Blue paint",
                    "description": "blue",
                    "price": 2.6,
                    "quantityAvailable": 51
                }
            }
        ]
    },
    {
        "id": 13,
        "status": "not paid",
        "user": {
            "id": 6,
            "userName": "user1",
            "password": "user1",
            "type": "user",
            "money": 50.0
        },
        "orderPartList": [
            {
                "id": 14,
                "quantity": 500,
                "product": {
                    "id": 12,
                    "name": "grzyb",
                    "description": "różowy z czarnymi kropkami ",
                    "price": 0.04,
                    "quantityAvailable": 99500
                }
            },
            {
                "id": 15,
                "quantity": 17,
                "product": {
                    "id": 2,
                    "name": "Red paint",
                    "description": "red",
                    "price": 2.55,
                    "quantityAvailable": 28
                }
            },
            {
                "id": 16,
                "quantity": 13,
                "product": {
                    "id": 3,
                    "name": "Blue paint",
                    "description": "blue",
                    "price": 2.6,
                    "quantityAvailable": 51
                }
            }
        ]
    }
]
-->