import { createStore } from 'vuex'

export default createStore({
  state: {
    mode:'list',
    newsData:[{id:1,name:'홍길동',subject:'뉴스제목',contents:'뉴스내용들...'}]
  },
  getters: {
  },
  mutations: {
    insertNews(state,newValue){
      state.newsData.push(newValue);
    },
    modeEdit(state,str){
      state.mode = str
    },
    deleteNews(state,delId){
      let del = state.newsData;
      state.newsData = del.filter(e=>e.id!=delId)
    }
  },
  actions: {
  },
  modules: {
  }
})
