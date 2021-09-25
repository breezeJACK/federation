<template>
    <div>
        <h1 class="bgimg">这是一个头部导航{{name}}</h1>
        <h2>哈哈哈哈哈 成功了!!!!!</h2>
     <ceshi/>
    </div>
</template>
<script>
import ceshi from "./ceshi.vue"
export default {
    props: {
        name: {
            type: String,
            default: ''
        }
    },
    components:{ceshi}
}
</script>
<style>

</style>