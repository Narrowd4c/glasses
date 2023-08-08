<script>
    export default{
        data(){
            return{
                items:[{title:'DOUBLE A+', imgUrl:'/images/home-section4-1.png'}, {title:'YOUTH', imgUrl:'/images/home-section4-2.png'}],
                itemsSm:[{title:'DOUBLE A+', imgUrl:'/images/home-section4-1-sm.png'}, {title:'YOUTH', imgUrl:'/images/home-section4-2-sm.png'}],
            }
        }
    }
</script>
<template>
    <section class="co-branding">
        <div class="container py-20">
            <h3 class="mb-12 text-white display-5 fw-bold text-center">聯名設計鏡框</h3>
            <ul class="d-md-flex flex-column flex-lg-row d-none gap-y-6">
                <li v-for="{title, imgUrl} in items" :key="title" class="position-relative">
                    <img :src="imgUrl" :alt="title">
                    <a href="#" class="text-shadow border bg-white d-block text-center py-2 link-primary stretched-link text-secondary fst-italic fw-bold display-5 font-roboto">{{ title }}</a>
                </li>
            </ul>
            <ul class="d-md-none gap-y-6">
                <li v-for="{title, imgUrl} in itemsSm" :key="title" class="position-relative">
                    <img :src="imgUrl" :alt="title">
                    <a href="#" class="text-shadow border bg-white d-block text-center py-2 link-primary stretched-link text-secondary fst-italic fw-bold display-5 font-roboto">{{ title }}</a>
                </li>
            </ul>
        </div>
    </section>
</template>
<style lang="scss">
    .co-branding{
        background: url(../images/index-bg.png) center/cover no-repeat;
    }
</style>