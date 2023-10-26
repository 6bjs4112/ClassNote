import { createStore } from 'vuex'

export default createStore({
  state: {
    //데이터 값 정의 (변수 만드는 곳)
    count:10, count2:20
  },
  getters: {
    //정의된 데이터 값을 가공 (읽기 전용)
    limit(state){
      return state.count === 20
    } 
  },
  mutations: {
    //정의된 데이터값을 수정
    changeCount(state,num){
      state.count = num;
    }
  },
  actions: {
    //무엇을 수정하라고 명령 (mutations에 요청함)
    //commit을 통해 요청함
    requestCount({commit},action){
      let num = 0;
      if(action.type=='plus'){
        num= action.num+1
      }else{
        num= action.num-1
      }
      commit('changeCount', num)
    }
  },
  modules: {
    /*데이터 유형이 한개 이상일 때 
    ex) 멤버 데이터, 장바구니 데이터
    */
  }
})
