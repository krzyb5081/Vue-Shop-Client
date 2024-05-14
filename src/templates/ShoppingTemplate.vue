<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data: function(){
        return {
            products: {},
            searchText: '',
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
        },
        addToCart: async function(product, event){
            var formData = new FormData();
            formData.append('productId', parseInt(product.id));
            formData.append('quantity', 1);

            await axios.post("http://localhost:8080/addProductToCart", formData, {withCredentials: true})

            event.target.textContent = "Product added to cart";
        }
    },
    mounted(){
        this.getProducts();
    }
})
</script>

<template>
    <div>
            <form class="form-group" @submit.prevent="search()">
                <input class="form-control" type="text" v-model="searchText" name="searchText" placeholder="What are you looking for?" />
                <input class="form-control btn btn-success" type="submit" value="Search" />
            </form>

            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Product name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Available</th>
                        <th scope="col">Add to cart</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products">
                        <td> {{product.name}} </td>
                        <td> {{product.description}} </td>
                        <td> {{product.price}} </td>
                        <td> {{product.quantityAvailable}} </td>
                        <td> <button class="btn btn-success" @click="addToCart(product, $event)">Add to cart</button> </td>
                    </tr>
                </tbody>
            </table>

        </div>
</template>