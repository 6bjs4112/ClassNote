<!-- testItem.vue -->
<template lang="">
    <li @click="itemAction(item.id)" :class="{active:check}">
        {{ item.title }}
    </li>
</template>

<script>
export default {
    props:['item','check'],

    data(){
        return{
            isActive:false
        }
    },

    methods:{
        itemAction(id){
            // console.log(id);
            this.isActive = !this.isActive
            this.$emit('parent',id)
            //자식이 부모의 속성을 잡을때 쓰는 $emit
        }
    }
}
</script>

<style lang="scss">
    .active{color:red;}
</style>