<script>
export default{
    data(){
        return{
            items:[{img:'/images/home-section3-1.png', title:'OPTICAL'},{img:'/images/home-section3-2.png', title:'SUNGLASSES'},{img:'/images/home-section3-3.png', title:'FUNCTIONAL'}]
        }
    }
}
</script>
<template>
    <section class="container py-20">
        <h3 class="mb-12 text-primary display-5 fw-bold text-center">經典系列鏡框</h3>
        <ul class="row flex-column flex-lg-row gap-y-6">
            <li v-for="{img, title} in items" :key="title" class="col-6 col-lg-4 position-relative text-center mx-auto">
                <img :src="img" :alt="title" class="mb-2">
                <a href="#" class="text-shadow stretched-link text-secondary fst-italic fw-bold display-5 font-roboto">{{ title }}</a>
            </li>
        </ul>
    </section>
</template>
<style lang="scss">

</style>
