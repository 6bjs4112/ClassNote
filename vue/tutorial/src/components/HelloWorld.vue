<template>
  <div class="hello">
    <h1 >{{ msg }}</h1>
    <div class="test"> {{ num }}</div>
    <button @click="imgChange">이미지 변경</button>
    <img v-bind:src="reUrl"/>
  </div>
</template>

<script>
export default {
  data(){
    return { num:10000, reUrl:'/img/01.jpg', urlNum:1}
  },

  methods:{
    imgChange(){
      this.num += 100;
      console.log(this.num);
      //export default{ }이 중괄호 안에 있는 값 this로 가져오기 가능

      this.urlNum < 7 ? this.urlNum+=1 : this.urlNum=1;
      this.reUrl = `/img/0${this.urlNum}.jpg`
    }
  },

  name: 'HelloWorld',
  props: {
    msg: String
  },

  mounted(){
    const ele = document.querySelector('.hello');
    console.log(ele);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "/src/assets/css/test.scss";
.test{
  border: 5px solid red;
}
// .hello{
//   h1{font-size: 3rem; color:teal;}
// }
</style>
