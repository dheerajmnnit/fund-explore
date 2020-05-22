<template>
    <div id="app" class="d-flex flex-column" style="min-height:100vh;">
        <vue-progress-bar></vue-progress-bar>
        <CommonHeader />
        <router-view style="flex:1;"></router-view>
        <CommonFooter />
    </div>
</template>

<script>
import CommonHeader from "@/components/header";
import CommonFooter from "@/components/footer";

export default {
    name: "App",
    components: {
        CommonHeader,
        CommonFooter
    }
};
</script>

<style lang="scss">
@import "./assets/sass/app";
</style>
