<template>
    <HomeFrame/>
    <div class="skills">
        <h1>This is an skills page</h1>
    </div>
</template>

<script>
import HomeFrame from '@/components/HomeFrame.vue'
export default {
    components: { HomeFrame }
}
</script>
<style scoped lang="scss">
    .skills{
        position: absolute; top: 15%; left: 30%;
    }
</style>