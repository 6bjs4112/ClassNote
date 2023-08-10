import { useState } from 'react';
import './App.scss';
import Item from './component/Item';

const initData = [
  // {todo: '리액트 공부하기',status:false, date:Date.now()}
  //일을 하면 status값을 ture로 변경하게
  //Date.now작성한 현재 시간이 올라오게
];

function App() {
    //데이터 저장할 변수 만들기
  const [data,setData] = useState(initData);

  //체크박스 onChange
  let todoStatus = function(e){
    // console.log(item.todo);//체크박스 클릭시 리스트 이름 출력
    // console.log(e.target.checked);//체크시 true 아닐시 false
    // console.log(e.target.dataset.code);//체크시 시간
    let stateCode = e.target.checked;//체크박스 T F
    let dateCode = e.target.dataset.code;//체크 시간. id대신쓰임
    
    let dataFind = data.map((obj)=>{
      if(obj.date == dateCode){
        obj.state = stateCode;
      }
      return obj;
    });
    setData(dataFind);
  }
  console.log(data);

  const insert = function(e){
    e.preventDefault(); //자동 넘어가기 방지. id나 이런거 유효성검사해야지
    // console.log(e.target.todo.value);//이렇게하면 콘솔로그에 입력한 밸류값 찍힘
    let todo = e.target.todo.value;
    setData([...data,{todo, state:false, date:Date.now()}])
    //...data=>기존에 있던 데이터 떠오기. 이렇게하면 새로 등록할때마다 누적됨
  }
   //sort데이터 넣기. 내림차순/오름차순
   data.sort(function(a,b){
      if(a.date < b.date){ return 1;}
      if(a.date > b.date){ return -1;}
      return 0;
  })

  return (
    <div className='App'>
      <article>
        <h1>🔥Todo List🔥<span>할일 6개 남음</span></h1>
        <ul>
          {
            data.map((obj)=>(
              //item.js로 옮김
              <Item key={obj.date} item={obj} todoStatus={todoStatus}/>
            ))
          }
        </ul>
        <form onSubmit={insert}>
          <p>
            <input type='text'name='todo'/>
            <button>등록</button>
          </p>
        </form>
      </article>
    </div>
  );
}

export default App;
