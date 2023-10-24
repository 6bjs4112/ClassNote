<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <h1>디지몬 친구들</h1>
    <h3>레츠고 레츠고</h3>
    <h5>나는 {{ imgNum }} 번째 이미지</h5>
    <div class="pick">
      <button @click="minusNum" class="left">◀</button>
      <img v-bind:src="imgUrl"/>
      <button @click="plusNum" class="right">▶</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{imgNum:1, imgUrl:`/img/1.png` }
  },
  methods:{
    minusNum(){
      this.imgNum >1 ? this.imgNum-- : this.imgNum=8;
      this.imgUrl=`/img/${this.imgNum}.png`;
    },
    plusNum(){
      this.imgNum <8 ? this.imgNum++ : this.imgNum=1;
      this.imgUrl=`/img/${this.imgNum}.png`;
    }
  },

  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
@import '/src/assets/test2.scss';
</style>
