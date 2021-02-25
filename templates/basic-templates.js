Vue.component('header-template',{
    template: `
    <div class="header" style="background-color: #5a5af4; display: grid; grid-template: 100% / 20% auto 20%;">
        <div>
            <img style="height: 100%; width: 100%; object-fit: contain;" src="binco-logo.png"></img>
        </div>
        <div style="text-align: center; margin: 10px; padding: 10px">
            <h1>Welcome to Binco clothing shop</h1>
        </div>
        <div style="text-align: right; margin: 10px; padding: 10px">
            <button>Log in</button>
        </div>
    </div>
    `
})

Vue.component('sidebar-template',{
    template: `
    <div class="sidebar" style="background-color: #6f6f8f; display: grid; grid-template: auto auto - auto;">
        <div style="text-align: center; ">
            <router-link to="/"><button class="btn btn-primary">main page</button></router-link><br/>
            <router-link to="/shopping"><button class="btn btn-primary">shopping</button></router-link><br/>
            <router-link to="/addProduct"><button class="btn btn-primary">add</button></router-link><br/>
            <router-link to="/show"><button class="btn btn-primary">show</button></router-link><br/>
            <router-link to="/register"><button class="btn btn-primary">register</button></router-link><br/>
            <router-link to="/login"><button class="btn btn-primary">login</button></router-link><br/>
            <router-link to="/showShoppingCart"><button class="btn btn-primary">show cart</button></router-link><br/>
            <router-link to="/showOrders"><button class="btn btn-primary">show orders</button></router-link><br/>
        </div>
        <div style="text-align: center;">
            <a href="#">idz do sklepu</a><br>
            <a href="#">nie wiem no</a><br>
            <a href="#">zrob cos ze soba...</a><br>
            <a href="#">kup chleb...</a><br>
        </div>
    </div>
    `
})

Vue.component('footer-template',{
    template: `
    <div class="footer" style="background-color: #5a5af4; display: grid; grid-template-columns: auto auto;">
        <div style="text-align: center;">
            <h4>made by: krzyb5081</h4>
        </div>
        <div style="text-align: center;">
            No rights reserved, blah blah, something.<br>
            Have a good shopping.
        </div>
    </div>
    `
})