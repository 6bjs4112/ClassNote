<template>
  <div class="home">
    <h2>홈스윗홈</h2>

    <ul>
      <testItem 
        v-for="item in testData" :key="item.id"
        :item="item"
        @parent="fnParent"
        :check="item.id == id"
      />
    </ul>
  </div>
</template>

<script>
import testItem from '../components/testItem.vue';

export default {

  data(){
    return{
      testData:[
        {id:1,title:'아이템1'},
        {id:2,title:'아이템2'},
        {id:3,title:'아이템3'},
        {id:4,title:'아이템4'},
        {id:5,title:'아이템5'}
      ],
      id:0
    }
  },

  methods:{
    fnParent(n){
      // alert(`${n}번째 자식`)
      this.id = n;
    }
  },

  name: 'HomeView',
  components: {
    testItem
  }
}
</script>

