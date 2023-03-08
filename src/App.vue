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
    <div class="main" style="display: grid; grid-template: 100% / 20% auto;">
      <sidebar-template></sidebar-template>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  <footer-template></footer-template>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>