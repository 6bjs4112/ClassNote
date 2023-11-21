<template>
  <div>
    <section class="leftProfile">
      <div class="wrapLeft20">
        <figure>
          <img src="../../public/assets/img/mypic.png" alt="profie_pictire"/>
        </figure>
        <div class="hiText"
        data-aos="fade-right"
        data-aos-duration="1000">
          <b class="hello">
            안녕하세요<br>프론트엔드 개발자<br>김윤하입니다.
          </b>
          <p class="email">tsunenikannsya@gmail.com</p>
        </div>
      </div>
    </section>

    <section class="rightMain">
      <div class="wrapRight80" >
          <nav class="navTab">
            <span class="toggleBtn">
              <label for="toggle" class="toggleLabel" >
                <input class="darkBtn" type="checkbox"  @click="toggleDarkMode"/>
              </label>
            </span>
          <dl class="selectTab">
            <router-link to="/">
              <div id="about" class="tabs"><p class="hover">About</p></div>
            </router-link>
            <router-link to="/skills" >
              <div id="skills" class="tabs"><p class="hover">Skills</p></div>
            </router-link>
            <router-link to="/project">
              <div id="project" class="tabs"><p class="hover">Project</p></div>
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
import AOS from "aos";
import { onMounted } from "@vue/runtime-core";

export default {
  name: 'HomeFrame',
  props: ['test'],
  data(){
      return { }
  },

  setup(){
      onMounted(() => {
          AOS.init();
      })
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
    .hiText{
      .hello{
        font-size: 32px; font-weight: 700;
        line-height: normal;
      }
      .email{
        font-size: 18px; font-weight: 500;
        margin-top: 10px;
      }
    }
  }
}
.rightMain{
  width: 80%;
  position: absolute; top: 10%; right: 5%;
  .wrapRight80{
    display: flex; flex-direction: row;
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

@media (min-width:820px) and (max-width: 1245px){
  .leftProfile{
    width: 100%; height: 20vh;
    top: 1%; left: 0%;
    padding: 0 2%;
    .wrapLeft20{
      display: flex; justify-content: flex-start; align-items: center;
      figure{margin-right: 35px; margin-bottom: 0;}
      .hiText{
        .hello{font-size: 28px; font-weight: 600;}
        .email{display: none;}
      }
    }
  }
  .rightMain{
    width: 100%; 
    height: 80vh;
    top: 7.5%; right: 0%;
    .wrapRight80{
      width: 100%;
      flex-direction: column;
    .navTab{
      width: 100%; flex-direction: row; justify-content: flex-end;
      .toggleBtn{
        .toggleLabel{
          transform: rotate(-90deg) translate(65px, 350px);
        }
      }
      .selectTab{
        flex-direction: row;
        height: unset;
        margin-right: 10px;
        .tabs{
          height: 75px;
          border-radius: 25px 25px 0px 0px;
        }
      }
      
    }
      .mainContent{width: 100%; height: 75vh;}
    }
  }
}//end 1240
@media (min-width:590px) and (max-width: 819px){
  .leftProfile{
    width: 100%; height: 20vh;
    top: 1%; left: 0%;
    padding: 0 2%;
    .wrapLeft20{
      display: flex; justify-content: flex-start; align-items: center;
      figure{
        margin-right: 35px; margin-bottom: 0;
        img{width: 140px; height: 140px;}
      }
      .hiText{
        .hello{font-size: 28px; font-weight: 600;}
        .email{display: none;}
      }
    }
  }
  .rightMain{
    width: 100%; 
    height: 80vh;
    top: 7.5%; right: 0%;
    .wrapRight80{
      width: 100%;
      flex-direction: column;
    .navTab{
      width: 100%; flex-direction: row; justify-content: flex-end;
      .toggleBtn{
        .toggleLabel{
          transform: rotate(-90deg) translate(-35px, -50px);
        }
      }
      .selectTab{
        flex-direction: row;
        height: unset;
        margin-right: 10px;
        .tabs{
          height: 75px;
          border-radius: 25px 25px 0px 0px;
        }
      }
      
    }
      .mainContent{width: 100%; height: 75vh;}
    }
  }
}
@media (min-width:425px) and (max-width: 589px){
  .leftProfile{
    width: 100%; height: 20vh;
    top: 1%; left: 0%;
    padding: 0 2%;
    .wrapLeft20{
      display: flex; justify-content: flex-start; align-items: center;
      figure{
        margin-right: 35px; margin-bottom: 0;
        img{width: 140px; height: 140px;}
      }
      .hiText{
        .hello{font-size: 28px; font-weight: 600;}
        .email{display: none;}
      }
    }
  }
  .rightMain{
    width: 100%; 
    height: 80vh;
    top: 7.5%; right: 0%;
    .wrapRight80{
      width: 100%;
      flex-direction: column;
      .navTab{
        margin-top: 90px;
        width: 100%; flex-direction: row; justify-content: flex-end;
        .toggleBtn{
          position: absolute; top: 18.5%; right: 12%;
          z-index: 5;
          .toggleLabel{
            transform: rotate(-90deg);
            
          }
        }
        .selectTab{
          flex-direction: row;
          height: unset;
          margin-right: 10px;
          .tabs{
            height: 75px;
            border-radius: 25px 25px 0px 0px;
          }
        }
        
      }
      .mainContent{width: 100%; height: 95vh;}
    }
  }
}
</style>
