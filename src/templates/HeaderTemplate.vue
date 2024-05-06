<template>
    <div class="header">
        <div>
            <router-link to="/">
                <img id="header-logo" src="./img/binco-logo.png"/>
            </router-link>
        </div>
        <div class="header-welcome">
            <h3>Welcome to Binco clothing shop</h3>
        </div>
        <div id="header-buttons">
            <div v-if="this.$store.state.logged === false">
                <router-link to="/login"><button class="btn btn-secondary btn-sm btn-block">Log in</button></router-link>
                <router-link to="/register"><button class="btn btn-secondary btn-sm btn-block">Register</button></router-link>
            </div>
            <b v-else>Hello, {{this.$store.state.userName}}<br></b>
            <router-link to="/showShoppingCart"><button class="btn btn-primary btn-lg btn-block">Show cart</button></router-link><br/>
        </div>
    </div>
</template>
