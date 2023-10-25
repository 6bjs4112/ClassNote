<template lang="">
    <h2>리스트 아이템</h2>
    <div>
        <!-- {{ $route.query.num }} -->
        <figure 
            v-for="(obj,k) in items" :key="k"
            @click="pageMove(k)"
        >
            <img src="/img/1.png"/>
            <figcaption>{{obj}}</figcaption>
        </figure>
    </div>
</template>
<script>
export default {
    name:'ListView',

    data(){
        return{
            items:['아이템1','아이템2','아이템3']
        }
    },
    
    methods:{
        pageMove(n){
            console.log( n );//인자값 들어오나 체크
            this.$router.push({name:'ClassView',params:{name:'강남역'}});
        }
    },

    mounted(){
        console.log(this.$route);
    }
}
</script>
<style lang="">
</style>