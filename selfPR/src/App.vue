<template>
  <div class="allWrap">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/about">Skill</router-link> |
      <router-link to="/about">Project</router-link>
    </nav>
    <button type="button" @click="toggleDarkMode">toggle</button>
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
* {
  box-sizing: border-box;
  margin: 0;
}
#app{
  background: #F4F5FF;
  width: 100%;
  height: 100vh;
  transition: 0.3s ease-in;

  &.darkmode{
  background: #333;
  transition: 0.3s ease-in;
  }
}
.allWrap{
  background-image: url("./assets/img/bgPattern.png");
  filter: opacity(0.85);
  width: 100%;
  height: 100vh;
}
</style>
