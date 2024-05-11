<script setup>
import HeaderTemplate from "./templates/HeaderTemplate.vue"
import SidebarTemplate from "./templates/SidebarTemplate.vue"
import FooterTemplate from "./templates/FooterTemplate.vue"
</script>

<script>
import { defineComponent } from 'vue';
export default defineComponent({

  async beforeMount(){
    let user = {};
    await axios.get('http://localhost:8080/getSessionUser', {withCredentials: true}).then(resp => {user = resp.data});

    if(user.userName == null){
        this.$store.state.logged = false; 
        this.$store.state.userName = '';
        console.log("test1")
    }
    else {
        this.$store.state.logged = true; 
        this.$store.state.userName = user.userName;
        console.log("test2")
    }
  }
  
})
</script>

<template>
  <header-template></header-template>
  <div class="row w-100">
    <div class="col-sm-4">
      <sidebar-template></sidebar-template>
    </div>
    <div class="col-sm-4">
      <router-view></router-view>
    </div>
  </div>
  <footer-template></footer-template>
</template>
