<template lang="">
    <div class="view">
        {{content}}
    </div>
    <button @click="modeEdit('list')">목록</button>
</template>
<script>
import { mapMutations } from 'vuex';

mapMutations
export default {
    props:['content'],
    methods:{
        ...mapMutations(['modeEdit'])
    }
}
</script>
<style lang="">
    
</style>