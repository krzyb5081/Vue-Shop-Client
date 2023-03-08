<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data: function(){
        return{
            userName: '',
            password: '',
            loginsuccess: ''
        }
    },
    methods:{
        login: async function(){

            var formData = new FormData();
            formData.append('userName', this.userName);
            formData.append('password', this.password);

            let response = await axios.post("http://localhost:8080/login", formData, {withCredentials: true});
            if(response.data == "loginsuccess"){
                this.loginsuccess = "loginsuccess";
                this.$store.state.logged = true;
                this.$store.state.userName = this.userName;
            } else {
                this.loginsuccess = "loginfail";
                this.$store.state.logged = false;
                this.$store.state.userName = null;
            }
        }
    },
    mounted(){
        if(this.$store.state.logged){
            this.$router.push("/");
        }
    }
})
</script>

<template>
    <div>
            <div v-if="$store.state.logged === false">
                <h1 v-if='loginsuccess == ""'>Log in</h1>
                <h1 v-if='loginsuccess == "loginsuccess"'>Logged in successfully</h1>
                <h1 v-if='loginsuccess == "loginfail"'>Login fail</h1>
                <form @submit.prevent='login()'>
                    User name:<br>
                    <input type="text" v-model="userName"><br>
                    Password:<br>
                    <input type="password" v-model="password"><br>
                    <button class="btn btn-primary">Log in</button>
                </form>
                You don't have account?<br>
                <router-link to="/register"><button class="btn btn-primary">Register</button></router-link>
            </div>
            <h1 v-else>You are logged in as: {{$store.state.userName}}</h1>
           
        </div>
</template>