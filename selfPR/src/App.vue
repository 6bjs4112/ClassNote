
<template>
  <div :class="['allBg',{darkmode}]">
    <div class="allWrap">
      <HomeFrame @parent="modeChange" />
    </div>
  </div>
</template>

<script>
import HomeFrame from './components/HomeFrame.vue';
export default {
  name: 'App',
  components:{HomeFrame},
  data(){
      return { darkmode: false,}
  },
  methods:{
    modeChange(){
      this.darkmode = !this.darkmode;
    }
  }
}
</script>

<style lang="scss">
@import "_reset";
//다크모드 관련
#app{
  width: 100%;
  height: 100vh;

  .darkmode{
  background: #1E1E1E;
  transition: 0.3s ease-in;
    .hello, .email{color: #FFF;}
    .mainContent{background-color: rgba(120, 120, 120, 0.60);}
    .title h1{color: #FFF;}
  }
}
.allBg{
  background: #F4F5FF;
  transition: 0.3s ease-in;
  .allWrap{
    background-image: url("./assets/img/bgPattern.png");
    filter: opacity(0.85);
    width: 100%;
    height: 100vh;
    position: relative;
  }
}

</style>
