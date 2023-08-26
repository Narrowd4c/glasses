<script >
  import BannerComp from '../components/HomePage/BannerComp.vue'
  import Feature from "../components/HomePage/FeatureComp.vue"
  import ClassicGlasses from "../components/HomePage/ClassicGlasses.vue"
  import CoBranding from "../components/HomePage/CoBranding.vue";
  import Reviews from "../components/HomePage/ReviewsComp.vue";
  import UserForm from "../components/HomePage/UserForm.vue";
  
  export default{
    components:{
      BannerComp,
      Feature,
      ClassicGlasses,
      CoBranding,
      Reviews,
      UserForm
    },
  }
</script>

<template>
    <BannerComp />
    <Feature></Feature>
    <ClassicGlasses></ClassicGlasses>
    <CoBranding></CoBranding>
    <Reviews></Reviews>
    <UserForm></UserForm>
</template>
<style lang="scss" scoped>
 
</style>