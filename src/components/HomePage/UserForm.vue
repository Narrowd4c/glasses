<script>
</script>
<template>
<section class="bg-light">
<div class="container py-10 py-md-20 w-lg-50 mx-auto">
    <h3 class="mb-6 text-primary display-5 fw-bold text-center">聯絡我們</h3>
    <p class="mb-6">我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。</p>
    <form class="vstack">
        
            <label for="user-name" >姓名</label>
            <input type="text" id="user-name" name="user-name" placeholder="陳小明">

            <label for="user-phone" >聯絡電話</label>
            <input type="text" id="user-phone" name="user-phone" placeholder="0912-345-678">
        
            <label for="user-email" >電子郵件</label>
            <input type="text" id="user-email" name="user-email" placeholder="example@email.com">
        
            <label for="comment" >意見反應</label>
            <textarea name="comment" id="comment" rows="5" placeholder="請輸入您的意見"></textarea>
        
        <div class="d-flex align-items-start mb-6">
            <input class="mt-1 border me-1" type="checkbox"  name="agree" id="agree">
            <label for="agree">我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。</label>
        </div>
        <button type="submit" class="btn-submit bg-secondary text-white mx-auto py-4 text-center">確認送出</button>
    </form>
</div>
</section>
</template>
<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/variables-dark";
@import "~bootstrap/scss/maps";
@import "~bootstrap/scss/mixins";
.btn-submit{
    border: 0px solid #000;
    width: 100%
}
@include media-breakpoint-up(md) { 
    .btn-submit{
        width: 50%;
    }
}
@include media-breakpoint-up(lg) { 
    .btn-submit{
        width: 416px;
    }
}
label{
    margin-bottom: .5rem;
}
input, textarea{
    background: rgba(0,0,0,0);
    padding: 6px 12px;
    border: 1px solid #000;
    margin-bottom: 1rem;
}
@include media-breakpoint-up(lg) { 
    .w-lg-50{
        width: 50%;
    }
 }
</style>
