<template>
  <section class="leftProfile">
    <div class="wrapLeft20">
      <figure>
        <img src="../assets/img/profilepic.png" alt="profie_pictire"/>
      </figure>
      <b>
        안녕하세요<br>프론트엔드 개발자<br>김윤하입니다.
      </b>
      <p>tsunenikannsya@gmail.com</p>
    </div>
  </section>

  <section class="rightMain">
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

    </article>
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
@import url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff') format('woff');
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
    b{font-size: 32px; font-weight: 400;}
    p{font-size: 18px; font-weight: 400;}
  }
}
.rightMain{
  width: 70%;
  display: flex;
  .navTab{
    border: 3px solid red;
    width: 20%;
    .toggleBtn{img{width: 65px;}}
    .selectTab{
      font-family: ONE Mobile POP;
      div{
        width: 90px; height: 125px;
        border-radius: 25px 0px 0px 25px;
        background: #4E5197;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

        display: flex; justify-content: center; align-items: center;
        p{font-size: 20px; color: #FFF;}
      }
    }
  }
  .mainContent{
    border: 3px solid teal;
    width: 80%;
    height: 85vh;
    fill: rgba(255, 255, 255, 0.85);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
}
</style>
