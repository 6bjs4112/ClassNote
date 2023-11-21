<template>
  <section :class="classname">
    <article class="title">
      <h1 class="titleName darkText">About</h1>
      <div class="decoLine"></div>
    </article>

    <article class="aboutMe">
      <div class="myProfile">
        <div class="infoText">
          <div class="decoLineBlue"></div>
          <div class="textWrap darkText">
            <h2>김윤하</h2>
            <div class="detail">
              <p>1995.7.6</p>
              <p>경기도 군포시 수리동</p>
              <!-- <p>tsunenikannsya@gmail.com</p> -->
            </div>
          </div>
        </div>
        
        <div class="contactInfo darkText">
          <figure class="eachInfo">
            <img src="../../public/assets/img/email.png"/>
            <figcaption>tsunenikannsya@gmail.com</figcaption>
          </figure>
          <figure class="eachInfo">
            <img src="../../public/assets/img/kakao.png"/>
            <figcaption><a href="https://open.kakao.com/o/sU1pIyTf" target="blank">https://open.kakao.com/o/sU1pIyTf</a></figcaption>
          </figure>
          <figure class="eachInfo">
            <img src="../../public/assets/img/tel.png"/>
            <figcaption>+8210-3428-2527</figcaption>
          </figure>
        </div>
      </div>
      <div class="introduce">
        <div class="decoLineBlue"></div>
        <p class="introText darkText">예시) 웹표준을 준수하며 시맨틱 마크업을 작성합니다.SASS를 활용하여 컴포넌트화 되고 유지보수에 최적화된 코딩을 지향하며, 각종 jQuery 플러그인을 활용 및 커스터마이징 하여 여러가지 동적 효과를 구현합니다.Gulp로 각종 pre process와 빌드의 자동화를 구현하고 Git으로 소스의 형상관리를 합니다.</p>
      </div>
    </article>

    <ul class="myPages">
      <li class="page">
        <a href="https://github.com/6bjs4112" target="blank">
          <figure class="pageInfo hover">
            <img class="lightImg hover" src="../../public/assets/img/githubLogo.png" alt="깃허브 로고"/>
            <img class="darkImg hover" src="../../public/assets/img/githubLogoDark.svg" alt="깃허브 로고"/>
            <figcaption class=" darkText hover">Github</figcaption>
          </figure>
          <p class="pageText darkText hover">
            지금까지 제작한 모든 웹사이트의 소스를 볼 수 있는 저장소 
          </p>
        </a>
      </li>
      <li class="page">
        <a href="https://www.notion.so/e9588c404e7441df895afc909142d135?v=3a09f38d4d7144fe8e58bc35e3e8943d&pvs=4" target="blank">
          <figure class="pageInfo hover">
            <img class=" hover" src="../../public/assets/img/NotionLogo.png" alt="노션 로고"/>
            <figcaption class=" darkText hover">Notion</figcaption>
          </figure>
          <p class="pageText darkText hover">
            매일 공부한 것을 정리해 놓은 블로그입니다<br> 하루하루 배운 것을 정리하며 복습했던 흔적
          </p>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>

export default {


    data(){
      return{
        pathname:this.$route.name,
        classname:'about'
      }
    },

    mounted(){
      setTimeout(() => {
          this.tabChange();
      }, 100);
    },

    methods:{
    //탭 스타일 변경
      tabChange(){
        if(this.pathname == this.classname){
            const tabs = document.querySelectorAll('.tabs');
            tabs.forEach(tab => {
                tab.classList.remove('colorTab');
            });
            document.querySelector(`#${this.classname}`).classList.add('colorTab');
        }
      }
    }
}
</script>

<style scoped lang="scss">
.about{
  width: 100%; height: 100%;
  position: absolute; top: 15%; left: 30%;
  transform: translate(-30%,-15%);
  padding: 5%;

  .title{
    .titleName{
        color: #000;
        font-family: ONE Mobile POP;
        font-size: 52px;
        font-weight: 400;
        line-height: normal;
      }
    .decoLine{
      width: 200px;height: 15px; 
      background-color: rgba(167, 129, 231, 0.69);
      transform: translate(0%,-90%);
    }
  }

  .aboutMe{
    display: flex; flex-direction: column;
    margin-top: 75px;
    .myProfile{
      display: flex; justify-content: flex-start; align-items: center;
      .profilePic{
        width: 225px; height: 240px;
        border-radius: 48px;
        border: 3px solid #C1A7ED;
        overflow: hidden;
        img{ 
          width: 100%; height: 100%; 
          object-fit: contain;
          transform:scale(1.3) translate(-2%,10%);
        }
      }
      .infoText{
        display: flex; justify-content: center; align-items: center;
        .textWrap{
          display: flex; justify-content: center; align-items: flex-start; flex-direction: column;
          margin-left: 20px;

          color: #000;
          text-align: left;
          font-weight: 400;
          line-height: normal;
          h2{
            font-family: ONE Mobile POP;
            font-size: 60px;
          }
          .detail{
            margin-top: 10px;
            p{
              font-family: Noto Sans KR;
              font-size: 16px;
            }
          }
        }
        .decoLineBlue{
          width: 27px; height: 170px;
          background:linear-gradient(180deg, #8F94FF 0%, #9AE2FF 100%);
        }
      }
      .contactInfo{
        display: flex; justify-content: center; align-items: flex-start;
        flex-direction: column;
        margin-left: 50px;
        .eachInfo{
          display: flex; justify-content: center; align-items: center;
          margin: 5px 0 5px 50px;

          img{width: 37px; height: 37px;}
          figcaption{
            font-family: Noto Sans KR;
            font-size: 16px;
            margin-left: 5px;
          }
        }
      }
    }
    .introduce{
      display: flex; justify-content: flex-start; align-items: center;
      margin-top: 75px;
      .decoLineBlue{
        width: 27px; height: 125px;
        background:linear-gradient(180deg, #8F94FF 0%, #9AE2FF 100%);
      }
      .introText{
        width: 75%; margin-left: 20px;
        color: #000;
        font-family: Noto Sans KR;
        font-size: 16px;
        font-weight: 400;
        line-height: normal;
      }
    }
  }

  .myPages{
    display: flex; justify-content: flex-start; align-items: center;
    margin-top: 75px;
    .page{
      &:nth-of-type(2){ margin-left: 100px; }
      .pageInfo{
        display: flex; justify-content: flex-start; align-items: flex-end;
        margin-bottom: 15px;
        img{width: 47px; height: 47px;}
        .lightImg{display: block;}
        .darkImg{display: none;}
        figcaption{
          color: #000;
          text-align: center;
          font-family: ONE Mobile POP;
          font-size: 32px;
          margin-left: 5px;
        }
      }
      .pageText{
        color: #000;
        font-family: Noto Sans KR;
        font-size: 16px;
      }
    }
  }
}
@media (min-width:820px) and (max-width: 1245px){
  .about{
    .aboutMe{
      margin-top: 50px;
      .introduce{margin-top: 50px;}
    }
    .myPages{margin-top: 50px;}
  }
}
@media (min-width:590px) and (max-width: 819px){
  .about{
    .aboutMe{
      margin-top: 40px;
      .introduce{margin-top: 50px;}
      .myProfile{
        .contactInfo{margin-left: -10px;}
      }
    }
    .myPages{margin-top: 50px;}
  }
}
@media (min-width:425px) and (max-width: 589px){
  .about{
    .aboutMe{
      margin-top: 40px;
      .introduce{margin-top: 50px;}
      .myProfile{
        flex-direction: column; align-items: flex-start;
        .contactInfo{ margin-left: -10px; }
      }
      .decoLineBlue{height: 190px !important;}
    }
    .myPages{
      margin-top: 50px;
      .page:nth-of-type(2){ margin-left: 10px; }
    }
  }
}
</style>