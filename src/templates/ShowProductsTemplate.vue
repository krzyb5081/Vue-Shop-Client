<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data: function(){
        return {
            productList: {},
        }
    },
    methods:{
        getProductList: async function(){
            let response = await axios.get('http://localhost:8080/showProducts', {withCredentials: true})
            .then(resp => {this.productList = resp.data});
        },
        changeProperties: async function(product){
            if(product.price < 0){
                product.price = 0;
            }

            var formData = new FormData();

            formData.append('id', parseInt(product.id));
            formData.append('name', product.name);
            formData.append('description', product.description);
            formData.append('price', parseFloat(product.price));
            formData.append('quantityAvailable', parseInt(product.quantityAvailable));

            await axios.post("http://localhost:8080/changeProductProperties", formData, {withCredentials: true});

        }
    },
    mounted(){
        this.getProductList();
    }
})
</script>

<template>
    <div>
        <table class="table table-dark">
            <tr>
                <th scope="col">Product name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Available</th>
            </tr>
            <tr v-for="product in productList" v-bind:key="product.id">
                <td>
                    <input class="form-control" type="text" @change='changeProperties(product)' v-model='product.name'>
                </td>
                <td>
                    <input class="form-control" type="text" @change='changeProperties(product)' v-model='product.description'>
                </td>
                <td>
                    <input class="form-control" type="number" step="0.01" @change='changeProperties(product)' v-model='product.price'>
                </td>
                <td>
                    <input class="form-control" type="number" @change='changeProperties(product)' v-model='product.quantityAvailable'>
                </td>
            </tr>
        </table>
    </div>
</template>