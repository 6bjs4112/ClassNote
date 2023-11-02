<template>
  <div class="allWrap">
    <nav>
      <!-- <router-link to="/">Home</router-link> | -->
      <router-link to="/">About</router-link> |
      <router-link to="/skills">Skills</router-link> |
      <router-link to="/project">Project</router-link>
    </nav>
    <span class="toggleBtn">
      <label for="toggle" class="toggleLabel">
        <input type="checkbox" @click="toggleDarkMode"/>
      </label>
    </span>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
  el: '#app',

  data(){
    return { darkmode: false }
  },

  mounted(){
    //사용자 다크모드 감지
    if(window && window.matchMedia('(prefers-color-scheme: dark)').matches){
      document.documentElement.classList.add("darkmode")
    }else document.documentElement.classList.add("lightmode"); 
  },

  methods:{
    //다크모드 토글
    dark(){
      document.querySelector('#app').classList.add('darkmode');
      this.darkmode = true;
      this.$emit('dark')
    },

    light(){
      document.querySelector('#app').classList.remove('darkmode');
      this.darkmode = false;
      this.$emit('light')
    },

    toggleDarkMode(){
      if(this.darkmode || document.querySelector('body').classList.contains('dark-mode')){
        this.light();
      }else this.dark();
    }
  }
}
</script>

<style lang="scss">
@import "_reset";
#app{
  background: #F4F5FF;
  width: 100%;
  height: 100vh;
  transition: 0.3s ease-in;

  &.darkmode{
  background: #1E1E1E;
  transition: 0.3s ease-in;
    .hello, .email{color: #FFF;}
  }
}
.allWrap{
  background-image: url("./assets/img/bgPattern.png");
  filter: opacity(0.85);
  width: 100%;
  height: 100vh;
  position: relative;

  //토글 버튼관련
  .toggleBtn{
    position: absolute; top: 10%; left: 20%;
    .toggleLabel{
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;

      [type="checkbox"]{
        appearance: none;
        position: relative;
        background-color:#49494B;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 50px;
        width: 60px; height: 145px;
        transition: .3s linear;
    
        &::before{
          content: "";
          position: absolute; 
          left: 5px; top: 5px;
          width: 50px; height: 50px;
          border-radius: 50%;
          background-color: #8F94FF;
          transition: .3s linear;
        }
        &:checked{ background-color: #FEFEFF; } 
        &:checked::before{ top: 90px; background-color: #99DAFF; } 
      }
    }
  }
}

</style>
