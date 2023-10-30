<template>
  <div class="hello">
    <form @submit.prevent="insert">
      <p><input type="text" v-model="name"/></p>
        <!-- 작성하기만 하면 v-model이란 변수에 name값이 저장될 것 -->
      <p><input type="submit" value="저장"/></p>
    </form>

    <ul>
      <li v-for="(obj) in data" :key="obj.date">
        <p>이름:{{ obj.name }}</p>
        <p>생성날짜:{{ obj.date }}</p>
        <p>좋아요:{{ obj.count }}</p>
        <button @click="update(obj.date,obj.count)">💜</button>
        <button @click="del(obj.date)">삭제</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{ name:'',data:[]}
  },

  mounted(){
    this.select();
  },

  methods:{
    select(){
      axios
      .get("http://localhost:3000/api")
      .then(res=>{
        this.data = res.data;
      })
    },
    
    del(date){
      axios
      .delete(`http://localhost:3000/api/delete?date=${date}`)
      .then(res=>{
        this.data = res.data;
      })
    },

    update(date,count){
      axios
      .put(`http://localhost:3000/api/update?date=${date}`,
        {count:count+1}
      )
      .then(res=>{
        this.data = res.data;
      })
    },

    insert(){
      const data = {
        name:this.name,
        date:Date.now(),
        count:0
      }
      axios
      .post("http://localhost:3000/api/insert",data)
      .then(res=>{
        this.data = res.data;
      })
    }
  },

  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
li{
  list-style-type: none;
  border: 3px solid green;
  display: flex; justify-content: space-between;
}
</style>
