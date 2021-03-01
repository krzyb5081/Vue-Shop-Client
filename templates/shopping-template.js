Vue.component("shopping-template",{
    template:`
        <div>
            <form v-on:submit="search()" method="post">
                <input type="text" v-model="searchText" name="searchText" placeholder="product name" />
                <input type="submit" value="Search" />
            </form>

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
                        <add-product-to-cart v-bind:product-id="product.id"></add-product-to-cart>
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
            let response = await axios.get('http://localhost:8080/shopping')
            .then(resp => {this.products = resp.data});
        },
        search: async function(){

            var formData = new FormData();
            formData.append('searchText', this.searchText);

            let response = await axios.post('http://localhost:8080/shopping', formData)
            .then(resp => {this.products = resp.data});
        }
    },
    components: {
        'addProductToCart':{
            data: function(){
                return{
                    productId: null,
                    quantity: null
                }
            },
            props:['productIdProp'],
            template:`
                <form v-on:submit="addProductToCart()" method="post">
                    {{productId=productIdProp}}
                    <input type="number" v-model="quantity" name="quantity" value="0" />
                    <button>Add to cart</button>
                </form>
            `
        }
    }
    ,
    mounted(){
        this.getProducts();
    }
})
//<form action="#" th:action="@{/shopping}" method="post">
//<form action="#" th:action="@{/addProductToCart}" method="post">