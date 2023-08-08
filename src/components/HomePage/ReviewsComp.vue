<script>
export default {
data(){
    return{
        reviews:[
            {imgUrl:'/images/home-section5-1.png', name:'Jessy', comment:'眼鏡品質優良，下次還會想來這邊購買！', date:'2021/06/20'},
            {imgUrl:'/images/home-section5-2.png', name:'凱倫', comment:'做工細緻、鏡架很輕盈，待久也不會覺得有負擔，推薦給大家！', date:'2021/04/18'},
            {imgUrl:'/images/home-section5-3.png', name:'悠悠', comment:'謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！', date:'2020/12/25'},
            {imgUrl:'/images/home-section5-4.png', name:'Kyuan', comment:'服務很好，品質沒有任何問題，非常喜歡。', date:'2020/10/31'}
        ]
    }
}
}
</script>
<template>
<section class="container py-10 py-md-20">
    <h3 class="mb-6 mb-md-12 text-primary display-5 fw-bold text-center">顧客推薦</h3>
    <ul class="row gap-y-4">
        <li v-for='({imgUrl, name, comment, date}, index) in reviews' :key='index+imgUrl' class="col-md-6 col-lg-3 rounded-4">
            <div class="d-flex flex-column align-items-stretch h-100 card-shadow rounded-4">
                <img :src="imgUrl" :alt="name">
                <div class="p-4 vstack  border">
                    <p class="mb-2 fw-semibold">{{ name }}</p>
                    <p class="mb-18">{{ comment }}</p>
                    <p class="mt-auto text-muted">{{ date }}</p>
            </div>
            </div>
        </li>
    </ul>
</section>
</template>
<style lang="scss">
    .mb-18{
        margin-bottom: 4.5rem;
    }
    .card-shadow{
        box-shadow: 0px 2px 6px #00000029;
    }
</style>