Vue.component("show-products-template",{
    template:`
        <div>
            <table>
                <tr>
                    <th>Product name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Available</th>
                </tr>
                
                <tr v-for="product in productList" v-bind:key="product.id">
                    <td>
                        <input type = "text" @change='changeProperties(product)' v-model:value='product.name'>
                    </td>
                    <td>
                        <input type = "text" @change='changeProperties(product)' v-model:value='product.description'>
                    </td>
                    <td>
                        <input type = "number" step="0.01" @change='changeProperties(product)' v-model:value='product.price'>
                    </td>
                    <td>
                        <input type = "number" @change='changeProperties(product)' v-model:value='product.quantityAvailable'>
                    </td>
                </tr>
            </table>
        </div>
    `,
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