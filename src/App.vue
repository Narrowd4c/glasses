<script>
//import { RouterLink, RouterView } from 'vue-router';
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from "./components/FooterComp.vue";
export default{
  components:{
    // RouterLink,
    // RouterView,
    HeaderComp,
    FooterComp
  }
}

//import Home from './views/HomeView.vue'
</script>

<template>
  <HeaderComp />
  <RouterView></RouterView>
  <FooterComp />

</template>
<style lang="scss">
</style>
    