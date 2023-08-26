<script>
import { RouterLink } from 'vue-router';
export default {
    components: [
        RouterLink
    ]
}
</script>
<template>
    <footer class="bg-secondary mt-auto">
        <div class="container">
        <div class="row py-6 align-items-md-center text-white gap-y-9">
        <div class="order-2 d-flex col col-md-12">
        <ul class="d-none d-md-flex gap-12 align-items-center">
                <li><RouterLink to="/">首頁</RouterLink></li>
                <li><a href="#">系列鏡框</a></li>
                <li><a href="#">門市據點</a></li>
                <li><a href="#">部落格</a></li>
                <li><RouterLink to="faq">常見問題</RouterLink></li>
        </ul>
        <ul class="d-flex ms-auto gap-2">
            <li><a href="#"><img class="icon" src="/images/ic-social-fb.png" alt="fb"></a></li>
            <li><a href="#"><img class="icon" src="/images/ic_social_ig.png" alt="ig"></a></li>
            <li><a href="#"><img class="icon" src="/images/ic_social_line.png" alt="line"></a></li>
        </ul>
        </div>

        <div class="order-1 order-md-3 text-white col">
            <a href="tel:0800-000-000" class="hstack mb-2 connection"><span class="me-5 connection material-symbols-outlined">call</span>0800-000-000</a>
            <a href="mailto:glasses@business.com" class="hstack connection"><span class="me-5 connection material-symbols-outlined">mail</span>glasses@business.com</a>
        </div>

        </div>
        <div class="d-flex flex-column gap-2 flex-md-row fs-lg-14px py-6 py-md-8 border-top border-white text-white">
            <p class="font-roboto me-auto">Copyright © 2020 Glasses.All rights reserved.</p>
                <a href="#" class="">隱私權政策</a>
                <a href="#" class="">服務條款</a>
            
        </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/variables-dark";
@import "~bootstrap/scss/maps";
@import "~bootstrap/scss/mixins";

a{
    color: inherit;
}
.icon{
    width: 24px;
}
.gap-y-9{
    gap: 2.25rem 0px;
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 900,
  'GRAD' 0,
  'opsz' 48
}
.justify-self-end{
    justify-self:end;
}
@include media-breakpoint-up(md) { 
    .connection{
        font-size: 2.5rem;
    }
    .icon{
        width: 40px;
    }
    .fs-14px{
        font-size: 14px !important;
    } 
}

@include media-breakpoint-up(lg) { 
      .icon{
        width: 48px;
    }
}
  
</style>