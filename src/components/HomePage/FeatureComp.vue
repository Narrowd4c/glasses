<script>
  export default{
    data(){
      return{
        feature:[
          {img:'./images/home-section2-1.png', title:'單一價格', describe:'無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。'},
          {img:'./images/home-section2-2.png', title:'20 分鐘即可取件', describe:'為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快 20 分鐘即可完成。'},
          {img:'./images/home-section2-3.png', title:'安心售後服務', describe:'我們提供長達 120 天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。'},
          {img:'./images/home-section2-4.png', title:'關於鏡片', describe:'使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。'}
        ]
      }
    }
  }
</script>
<template>
  <section class="bg-light">
      <div class="container py-10 py-lg-20">
        <h3 class="mb-6 text-primary display-5 fw-bold text-center">用專業的心，做專業的事</h3>
        <ul class="row gap-y-6 justify-content-center">
          <li v-for="{img, title, describe} in feature" :key="title" class="col-lg-3 col-md-6 col-12 text-center">
            <img :src="img" :alt="title" class="feature-img mb-4">
            <h4 class="mb-2 text-primary fw-bold h4">{{ title }}</h4>
            <p class="text-start">{{ describe }}</p>
          </li>
        </ul>
      </div>
    </section>
</template>

<style lang="scss">
   .feature-img{
      width: 100px;
      height: 100px;
    }
</style>