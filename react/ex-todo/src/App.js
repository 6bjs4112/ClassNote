import { useEffect, useState } from 'react';
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
  
//수정 버튼
  const [mode, setMode] = useState(true);
  const [mData,setMData] = useState('할 일을 입력해 보세요~');

  let [mCode, setMCode] = useState();//code 다른데서도 쓰려고 만듬
  const modifyData = function(code){
    // console.log('수정중...');
    setMCode(code);
    setMode(false);//수정 버튼을 누르면 mode가 false로 바뀜
    let data2 = data.filter(obj => (obj.date == code));
    // console.log(mData[0].todo); 바꿀 텍스트 찍어보기
    setMData([data2[0].todo]);
  }

//삭제 버튼
  const deleteData = function(code){
    // console.log('아이템 삭제');
    let deleteData = data.filter(obj => (obj.date != code));//삭제 대상이 아닌것들을 찾음
    setData(deleteData);//누른 id(date)를 제외하고 리스트에 남기는 형식임
  }

//할일 n개 남음
  const [count, setCount] = useState(0);
  //useState => 값이 바뀌게 되면 랜더링이 되며 나타남
  
  useEffect(()=>{
    todoCount();
  },[data])//useEffect =>바뀌는 값이 있을 때 실행됨

  const todoCount = function(){
    let dataCount = data.filter(obj => (obj.state==false));
    setCount(dataCount.length);
  }
  
//체크박스 onChange
  let todoStatus = function(e){
    // console.log(item.todo);//체크박스 클릭시 리스트 이름 출력
    // console.log(e.target.checked);//체크시 true 아닐시 false
    // console.log(e.target.dataset.code);//체크시 시간
    let stateCode = e.target.checked;//체크박스 T F
    let dateCode = e.target.dataset.code;//체크 시간. id대신쓰임
    
    let dataFind = data.map((obj)=>{//업데이트한 결과물
      if(obj.date == dateCode){
        obj.state = stateCode;
      }
      return obj;
    });
    setData(dataFind);//업데이트한 결과물 실 적용
  }
  console.log(data);

//내용 등록하기
  const insert = function(e){
    e.preventDefault(); //자동 넘어가기 방지. id나 이런거 유효성검사해야지
    // console.log(e.target.todo.value);//이렇게하면 콘솔로그에 입력한 밸류값 찍힘
    let todo = e.target.todo.value;
    // setData([...data,{todo, state:false, date:Date.now()}]) 이거 if문으로 들어감
    //...data=>기존에 있던 데이터 떠오기. 이렇게하면 새로 등록할때마다 누적됨
    
    //수정하기 버튼 추가 내용
    if(mode){
      //기존것 여기에 붙혀넣음
      setData([...data,{todo, state:false, date:Date.now()}]);
      e.target.todo.value='';//입력>등록 하고나면 비우기. 근데 mData넣어놔서 안됨
      setMData('');//이제 입력창 비워짐
    }else{
      //수정하기
      setData(
        data.map(obj=>{
          if(obj.date == mCode){
            obj.todo = todo
            e.target.todo.value=''
          }return obj;
        })
      )
      setMode(true);
      setMData('');//입력창 비우기22
      //수정 끝나면 다시 등록 버튼 뜨게
    }
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
        <h1>🔥Todo List🔥<span>할일 {count}개 남음</span></h1>
        <ul>
          {
            data.map((obj)=>(
              //item.js로 옮김
              <Item 
                key={obj.date} 
                item={obj} 
                todoStatus={todoStatus}
                deleteData={deleteData}
                modifyData={modifyData}
              />
            ))
          }
        </ul>
        <form onSubmit={insert}>
          <p>
            {//중괄호를 열면 js처럼 쓸 수 있다

        //if문 쓰고싶은데 못쓴대요ㅠㅠ 
            // if(0){
            //   <input type='text'name='todo'/>
            //   <button>등록</button>
            // }else{
            //   <input type='text'name='todo'/>
            //   <button>수정</button>
            // }
        //근데? 삼항연산자는?? 가능함!?
            //   (mode) ?
            //   <p>
            //     <input type="text" name="todo" />
            //     <button>등록</button>
            //   </p>
            // :
            //   <p>
            //     <input type="text" name="todo" defaultValue="홍길동" />
            //     <button>수정</button>
            //   </p> 
        //위에거 줄여쓰면 이렇게 됨
              <p>
                <input type="text" 
                  name="todo" 
                  value={mData} 
                  onChange={ function(e){setMData(e.target.value)} } 
                />
                <button>
                  {(mode)? '등록':'수정'}
                </button>
              </p> 
            }
          </p>
        </form>
      </article>
    </div>
  );
}

export default App;