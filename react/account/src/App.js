import './App.scss';
import axios from 'axios'
import {HashRouter, Routes, Route, Link} from 'react-router-dom'
import List from './component/List';
import Insert from './component/Insert';
import Modify from './component/Modify';
import Context from './Context';


function App() {
  // //내용확인
  // axios.get('http://localhost:3030/history/1')
  // .then(res=>{
  //   console.log(res.data);
  // })

  //내용 추가
  // axios.post('http://localhost:3030/history',{
  //   "msg":"방배역 커피집", "price":4000, "date":"2023-08-23"
  // })

  //내용 삭제
  // axios.delete('http://localhost:3030/history/13')

  //내용 수정
  // axios.put('http://localhost:3030/history/1',{
  //   "msg":"커피"
  // })

  return (
    <Context>
      <HashRouter>
        <header>
          <nav>
            <Link to="/">HOME</Link>
            <Link to="/insert">글쓰기</Link>
            {/* <Link to="/modify">글 수정</Link> */}
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<List/>}/>
            <Route path="/insert" element={<Insert/>}/>
            <Route path="/modify" element={<Modify/>}/>
          </Routes>
        </main>

      </HashRouter>
    </Context>
  );
}

export default App;
