<script>
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from "./components/FooterComp.vue";
export default{
  components:{
    HeaderComp,
    FooterComp
  }
}
</script>

<template>
  <HeaderComp />
  <RouterView></RouterView>
  <FooterComp />

</template>
<style lang="scss">
#app{
    display: flex;
    flex-direction: column;
    min-height:100dvh;
}
</style>