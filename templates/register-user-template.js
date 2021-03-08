Vue.component('register-user-template', {
    template:`
        <div>
            <div v-if="$store.state.logged === false">
                <h1 v-if='registersuccess == ""'>Register</h1>
                <h1 v-if='registersuccess == "registersuccess"'>Registered successfully</h1>
                <h1 v-if='registersuccess == "registerfail"'>Register fail</h1>
                <form @submit.prevent='register()'>
                    User name:<br>
                    <input type="text" v-model="userName"><br>
                    Password:<br>
                    <input type="password" v-model="password"><br>
                    <button class="btn btn-primary">Register</button>
                </form>
                You already have account?<br>
                <router-link to="/login"><button class="btn btn-primary">Log in</button></router-link>
            </div>
            <h1 v-else>You are logged in as: {{$store.state.userName}}<br>You must be logged out!</h1>
        </div>
    `,
    data: function(){
        return{
            userName: '',
            password: '',
            registersuccess: ''
        }
    },
    methods:{
        register: async function(){

            var formData = new FormData();
            formData.append('userName', this.userName);
            formData.append('password', this.password);

            let response = await axios.post("http://localhost:8080/register", formData, {withCredentials: true});
            if(response.data == "registersuccess"){
                this.registersuccess = "registersuccess";
            } else {
                this.registersuccess = "registerfail"
                alert("registered new account");
                this.$router.push("/login");
            }
        }
    },
    mounted(){
        if(this.$store.state.logged){
            this.$router.push("/");
        }
    }
})