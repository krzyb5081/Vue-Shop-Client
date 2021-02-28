Vue.component("shopping-template",{
    template:`
        <div>
            <form v-on:submit="search()" action="#/shopping" method="post">
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
                        <form v-on:submit="addProductToCart(product.id)" action="#" method="post">
                            <input type="number" v-model="quantity" name="quantity" value="0" />
                            <input type="submit" value="Add to cart" />
                        </form>
                    </td>
                </tr>
            </table>
        </div>
    `,
    data: function(){
        return {
            products: {},
            searchText: null,
            quantity: null
        }
    },
    methods:{
        getProducts: async function(){
            let response = await axios.get('http://localhost:8080/shopping')
            .then(resp => {this.products = resp});
        },
        search: function(){

        },
        addProductToCart: function(productId){
            alert("product id: "+productId+" quantity: "+this.quantity)
        }
    },
    mounted(){
        this.getProducts();
    }
})
//<form action="#" th:action="@{/shopping}" method="post">
//<form action="#" th:action="@{/addProductToCart}" method="post">