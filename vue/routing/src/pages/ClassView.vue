<template lang="">
    <h2>클래스</h2>
    파람스값:{{ $route.params.name }}
    <p>클래스 명에 basic on이 들어오는지 확인~</p>
    
    <div :class="`basic ${active}`">
        클래스 1 => "`basic ${active}`"
    </div>

    <div class="basic" :class="active">
        클래스 2 => class="basic" :class="active"
    </div>

    <div :class="['basic',active]" >
        <!-- 배열 -->
        클래스 3 => :class="['basic',active]"
    </div>

    <div :class="{active: true}" >
        <!-- TF -->
        클래스 4 => :class="{active: true}"
    </div>

    <div :class="['basic',{active: true}]" >
        <!-- 배열 TF -->
        클래스 5 => :class="['basic',{active: true}]"
    </div>

    <div :class="active=='on'? 'active' :'' " >
        <!-- 삼항연산자 -->
        클래스 6 => :class="active=='on'? 'active' :'' "
    </div>

    <div :class="true && 'active' " >
        <!-- false일 경우에는 클래스명이 들어가지 않음 -->
        클래스 7 => :class="true && 'active' "
    </div>
</template>
<script>
export default {
    

    data(){
        return{
            active:'on'
        }
    },

    name:'ClassView',
    mounted(){
        console.log(this.$route);
    }
}
</script>
<style lang="">
    
</style>