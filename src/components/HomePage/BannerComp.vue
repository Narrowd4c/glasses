<script>

</script>
<template>
    <div class="banner d-flex align-items-center">
    <div class="container me-0 m-md-auto">
        <div class="text-end text-primary">
            <h1 class="fs-1 fw-normal">Promise-Desert 2020 早春系列</h1>
            <h2 class="display-3 fw-bold">看得清，才能看得遠</h2>
            <a href="#" class="btn btn-secondary rounded-0 fs-5 btn-buy">立即購買</a>
        </div>
    </div>
    </div>
</template>

<style lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/variables-dark";
@import "~bootstrap/scss/maps";
@import "~bootstrap/scss/mixins";
    .banner{
        background: url(../images/home-header.png) center/cover no-repeat;
        height: calc(100vh - 80px);
        @include media-breakpoint-down(lg) { 
            &{
                background: url(../images/home-header-sm.png) center/cover no-repeat; 
                height: 396px;
            }
        }
    }

    .btn-buy{
        padding: 6px 12px;
    }
</style>