<script>
  import { RouterLink } from 'vue-router'
  export default{
    components:{
      RouterLink
    },
    data(){
      return{
        links:[{link:'/', name:'系列鏡框'}, {link:'/', name:'門市據點'}, {link:"/", name:'部落格'}, {link:"/faq", name:'常見問題'}]
      }
    }
  }
</script>
<template>
  <div class="bg-secondary">
  <header class="container py-4 d-md-flex justify-content-between align-items-center">
    <RouterLink to="/" ><img class='logo' src="/images/logo-white.png" alt="logo"><p class="visually-hidden">Logo</p></RouterLink>
    <ul class="d-none d-md-flex gap-x-16 text-white">
      <li v-for="{link, name} in links" :key="link">
        <RouterLink :to=link class="text-white navigation">{{ name }}</RouterLink>
      </li>
    </ul>
  </header>
  <ul class="d-flex d-md-none flex-wrap text-white">
      <li v-for="{link, name} in links" :key="link" class="w-50 border text-center">
        <RouterLink :to=link class="text-white d-block py-3">{{ name }}</RouterLink>
      </li>
    </ul> 
</div>
</template>
<style lang="scss">
  .logo{
    width: 80px;
    height: 48.57px;
  }
  .gap-x-16{
    gap:0 4rem;
  }
  .navigation{
    position: relative;
    &:before{
    content:'';
    position: absolute;
    top:105%;
    width: 110%;
    height: 3px;
    background:#fff;
    transform:scaleX(0);
    transform-origin: 0%;
    transition:transform 0.6s;
  }
  &:hover{
    &:before{
      transform: scaleX(1);
    }
  }
  }
</style>