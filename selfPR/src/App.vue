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
      return {darkmode: false}
  },
  methods:{
    modeChange(){
      this.darkmode = !this.darkmode;
    }
  },
  mounted(){
  //사용자 다크모드 감지
  const elAllbg = document.querySelector('.allBg');
  const darkBtn = document.querySelector('.darkBtn');

    if(window && window.matchMedia('(prefers-color-scheme: dark)').matches){
      elAllbg.classList.add("darkmode");
      darkBtn.checked=true;
    }else {
      elAllbg.classList.remove("darkmode")
      darkBtn.checked=false;
    }
  
  darkBtn.addEventListener('change',()=>{
    if (darkBtn.checked) { elAllbg.classList.add("darkmode");} 
    else { elAllbg.classList.remove("darkmode"); }
    })
  }
}
</script>

<style lang="scss">
@import "_reset";
*{
  cursor:  url("../public/assets/img/cursor.png"), auto;
  a:hover, input:hover,  .tabs:hover, .hover:hover{cursor:  url("../public/assets/img/cursor2.png"), auto;}
}


#app{
  width: 100%;
  height: 100vh;
  
  .darkmode{
  background: #1E1E1E;
  transition: 0.3s ease-in;
    .hello, .email{color: #FFF;}
    .mainContent{background-color: rgba(120, 120, 120, 0.60);}
    .eachInfo:nth-child(2n+1){filter: brightness(10);}
    .darkText{color: #FFF;}
    .lightImg{display: none;}
    .darkImg{display: block;}
  }
}
.allBg{
  background: #F4F5FF;
  transition: 0.3s ease-in;
  .allWrap{
    background-image: url("/public/assets/img/bgPattern.png");
    filter: opacity(0.85);
    width: 100%;
    height: 100vh;
    position: relative;
  }
}
@media (min-width:425px) and (max-width: 589px){
  .allBg .allWrap{height: 121vh;}
}
</style>
