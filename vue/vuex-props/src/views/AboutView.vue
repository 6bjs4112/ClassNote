<!-- AboutView.vue -->
<template lang="">
  <h2>뷰엑스 테스트</h2>
  <div>
    <button @click="minus">➖</button>
      {{count}}
    <button @click="plus">➕</button>

    <p v-if="limit">count값이 20입니다! 그만 누르세요...</p>
    <p v-else-if="count==10"> count는 10입니다.</p>
    <p v-else> 20까지만 증가됨...</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
export default {
  computed:{
    ...mapState(['count','count2']),
    ...mapGetters(['limit'])
  },

  methods:{
    ...mapMutations(['changeCount']),
    ...mapActions(['requestCount']),

    plus(){
      // this.changeCount(this.count+1)
      this.requestCount({type:'plus', num:this.count})
    },
    minus(){
      // this.changeCount(this.count-1)
      this.requestCount({type:'minus', num:this.count})
    }
  }
}
</script>
<style lang="">
  
</style>
