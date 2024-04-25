<template>
    <div class="header" style="display: grid; grid-template: 100% / 20% auto 20%; background-color: blue;">
        <div>
            <router-link to="/">
                <img style="height: 100%; width: 100%; object-fit: contain;" src="./img/binco-logo.png"/>
            </router-link>
        </div>
        <div style="text-align: center; margin: 10px; padding: 10px">
            <h3>Welcome to Binco clothing shop</h3>
        </div>
        <div style="text-align: right; margin: 10px; padding: 10px">
            <div v-if="this.$store.state.logged === false">
                <router-link to="/login"><button class="btn btn-primary">Log in</button></router-link>
                <router-link to="/register"><button class="btn btn-primary">Register</button></router-link>
            </div>
            <b v-else>Hello, {{this.$store.state.userName}}<br></b>
            <router-link to="/showShoppingCart"><button class="btn btn-primary">Show cart</button></router-link><br/>
        </div>
    </div>
</template>