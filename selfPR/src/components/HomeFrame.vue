<template>
  <div>
    <section class="leftProfile">
      <div class="wrapLeft20">
        <figure>
          <img src="../../public/assets/img/mypic.png" alt="profie_pictire"/>
        </figure>
        <b class="hello">
          안녕하세요<br>프론트엔드 개발자<br>김윤하입니다.
        </b>
        <p class="email">tsunenikannsya@gmail.com</p>
      </div>
    </section>

    <section class="rightMain">
      <div class="wrapRight80" >
          <nav class="navTab">
            <span class="toggleBtn">
              <label for="toggle" class="toggleLabel" >
                <input type="checkbox"  @click="toggleDarkMode"/>
              </label>
            </span>
          <dl class="selectTab">
            <router-link to="/">
              <div id="about" class="tabs"><p>About</p></div>
            </router-link>
            <router-link to="/skills" >
              <div id="skills" class="tabs"><p>Skills</p></div>
            </router-link>
            <router-link to="/project">
              <div id="project" class="tabs"><p>Project</p></div>
            </router-link>
          </dl>
        </nav>
        <article class="mainContent">
          <!-- 컴포넌트들이 들어올 자리 -->
          <router-view/>
          
        </article>
      </div>
    </section>
    
  </div>
</template>

<script>
export default {
  name: 'HomeFrame',
  props: ['test'],
  data(){
      return { }
  },

  mounted(){
  //사용자 다크모드 감지
    if(window && window.matchMedia('(prefers-color-scheme: dark)').matches){
        document.documentElement.classList.add(".darkmode")
    }else {
      document.documentElement.classList.remove(".darkmode")
    }
  },

  methods:{
    //다크모드 토글
    toggleDarkMode(){
      this.$emit('parent')
    }
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap');
//@import url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff');
.leftProfile{
  width: 20%;
  position: absolute; top: 10%; left: 5%;
  font-family: Noto Sans KR;
  .wrapLeft20{
    figure{
      margin-bottom: 35px;
      img{
        width: 200px; height: 200px;
        border-radius: 50%;
        background-color: rgb(193, 167, 237,0.6);
      }
    }
    .hello{
      font-size: 32px; font-weight: 400;
      line-height: normal;
    }
    .email{
      font-size: 18px; font-weight: 400;
      margin-top: 10px;
    }
  }
}
.rightMain{
  width: 80%;
  position: absolute; top: 10%; right: 5%;
  .wrapRight80{
    display: flex; 
    .navTab{
      width: 15%;
      display: flex; flex-direction: column;
      justify-content: space-between; align-items: flex-end;
      .toggleBtn{img{width: 65px;}}
      .selectTab{
        font-family: ONE Mobile POP;
        display: flex; flex-direction: column;
        justify-content: space-between; align-items: flex-end;
        height: 400px;
        .tabs{
          width: 100px; height: 125px;
          border-radius: 25px 0px 0px 25px;
          background: #4E5197;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          transition: 0.3s ease-in;
          display: flex; justify-content: center; align-items: center;
          p{font-size: 20px; color: #FFF; transition: 0.3s ease-in;}
        }
        .colorTab{
          width: 200px;
          background: #8F94FF;
          p{font-size: 36px;}
        }
      }
    }
    .mainContent{
      border-radius: 12px;
      width: 85%; height: 85vh;
      background-color: rgba(255, 255, 255, 0.85);
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      transition: 0.3s ease-in;
    }
  }
}
//토글 버튼관련
.toggleBtn{
  padding-right: 5px;
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
</style>
