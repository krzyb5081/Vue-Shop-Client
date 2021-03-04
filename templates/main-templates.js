Vue.component('header-template',{
    template: `
    <div class="header" style="background-color: #5a5af4; display: grid; grid-template: 100% / 20% auto 20%;">
        <div>
            <router-link to="/">
                <img style="height: 100%; width: 100%; object-fit: contain;" src="binco-logo.png"></img>
            </router-link>
        </div>
        <div style="text-align: center; margin: 10px; padding: 10px">
            <h1>Welcome to Binco clothing shop</h1>
        </div>
        <div style="text-align: right; margin: 10px; padding: 10px">
            <router-link to="/showShoppingCart"><button class="btn btn-primary">Show cart</button></router-link><br/>
            <router-link to="/login"><button class="btn btn-primary">Log in</button></router-link>
            <router-link to="/register"><button class="btn btn-primary">Register</button></router-link>
        </div>
    </div>
    `
})

Vue.component('sidebar-template',{
    template: `
    <div class="sidebar" style="background-color: #6f6f8f; text-align: center;">
        <br/>
        <router-link to="/shopping"><button class="btn btn-primary">Shopping</button></router-link><br/><br/>
        <router-link to="/addProduct"><button class="btn btn-primary">Add product</button></router-link><br/>
        <router-link to="/showProducts"><button class="btn btn-primary">Show products</button></router-link><br/>
        <router-link to="/showOrders"><button class="btn btn-primary">Show orders</button></router-link><br/>
    </div>
    `
})

Vue.component('footer-template',{
    template: `
    <div class="footer" style="background-color: #5a5af4; display: grid; grid-template-columns: auto auto;">
        <div style="text-align: center;">
            Front-End and Back-End made by: krzyb5081<br>
            <a href="https://github.com/krzyb5081/" target="_blank">
                <button class="btn btn-secondary">Github: krzyb5081</button>
            </a>
        </div>
        <div style="text-align: center;">
            No rights reserved, blah blah, something.<br>
            Have a good shopping.
        </div>
    </div>
    `
})