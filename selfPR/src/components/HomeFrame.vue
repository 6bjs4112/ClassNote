<template>
  <section class="leftProfile">
    <div class="wrapLeft20">
      <figure>
        <img src="../assets/img/profilepic.png" alt="profie_pictire"/>
      </figure>
      <b class="hello">
        안녕하세요<br>프론트엔드 개발자<br>김윤하입니다.
      </b>
      <p class="email">tsunenikannsya@gmail.com</p>
    </div>
  </section>

  <section class="rightMain">
    <div class="wrapRight80">
        <nav class="navTab">
        <div class="toggleBtn">
          <img src="../assets/img/임시토글.png">
        </div>
        <dl class="selectTab">
          <div class="about"><p>About</p></div>
          <div class="skill"><p>Skill</p></div>
          <div class="project"><p>Project</p></div>
        </dl>
      </nav>
      <article class="mainContent">
        <!-- 컴포넌트들이 들어올 자리 -->
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeFrame',
  props: {
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff');
.leftProfile{
  width: 20%;
  position: absolute; top: 10%; left: 5%;
  font-family: Noto Sans KR;
  .wrapLeft20{
    // border: 1px solid red;
    figure{
      img{
        width: 200px; height: 200px;
        border-radius: 50%;
      }
    }
    .hello{font-size: 32px; font-weight: 400;}
    .email{font-size: 18px; font-weight: 400;}
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
        div{
          width: 100px; height: 125px;
          border-radius: 25px 0px 0px 25px;
          background: #4E5197;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  
          display: flex; justify-content: center; align-items: center;
          p{font-size: 20px; color: #FFF;}
        }
      }
    }
    .mainContent{
      border-radius: 12px;
      width: 85%; height: 85vh;
      background-color: rgba(255, 255, 255, 0.85);
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  }
}
</style>
