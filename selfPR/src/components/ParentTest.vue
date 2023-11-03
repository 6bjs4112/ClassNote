<template lang="">
    <div>
        <button @click="eventLisn">test</button>
    </div>
</template>
<script>
export default {
    methods:{
        eventLisn(){
            this.$emit('parent')
        }
    }
}
</script>
<style lang="">
    
</style>