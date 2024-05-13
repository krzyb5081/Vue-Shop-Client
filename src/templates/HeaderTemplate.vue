<template>
    <header class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top text-center bg-dark">
        <div class="row d-flex justify-content-between">
            <div class="p-1 col-sm-4">
                <router-link to="/">
                    <img class="img-fluid" src="./img/binco-logo.png"/>
                </router-link>
            </div>
            <div class="p-1 col-sm-4">
                <h3>Welcome to Binco clothing shop</h3>
            </div>
            <div class="p-1 col-sm-2">
                <div v-if="this.$store.state.logged === false">
                    <router-link to="/login"><button class="btn btn-secondary btn-sm btn-block">Log in</button></router-link>
                    <router-link to="/register"><button class="btn btn-secondary btn-sm btn-block">Register</button></router-link>
                </div>
                <b v-else>Hello, {{this.$store.state.userName}}<br></b>
                <router-link to="/showShoppingCart"><button class="btn btn-primary btn-lg btn-block">Show cart</button></router-link><br/>
            </div>
        </div>
    </headed>
</template>
