<template>
    <HomeFrame/>
    <div class="project">
        <h1>This is an project page</h1>
    </div>
</template>

<script>
import HomeFrame from '@/components/HomeFrame.vue'
export default {
    components: { HomeFrame }
}
</script>
<style scoped lang="scss">
    .project{
        position: absolute; top: 15%; left: 30%;
    }
</style>