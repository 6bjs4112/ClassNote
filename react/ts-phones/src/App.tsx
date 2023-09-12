import './App.scss';
import {Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import List from './comp/List';
import Write from './comp/Write';
import axios from 'axios';
import Detail from './comp/Detail';

function App() {
  axios.get('http://localhost:3030')
  return (
    <BrowserRouter>
      <Link to="/">HOME</Link>
    <section className='whole'>
      <main>
        <Routes>
          <Route path='/'element={<Home/>}/>
          {/* <Route path='/detail'element={<Detail/>}/> */}
          <Route path='/:id'element={<Detail/>}/>
        </Routes>
      </main>
      
      <section className='nav'>
        {/* <Link to="/">Home</Link> */}
        <Link to="/write">신규등록</Link>
        <Link to="/list">리스트</Link>
      </section>

      <div className='subpage'>
        <Routes>
          <Route path='/write'element={<Write/>}/>
          <Route path='/list'element={<List/>}/>
          
          {/* <Route path='/:id'element={<Detail/>}/> */}
        </Routes>
      </div>
    </section>
    </BrowserRouter>
  );
}

export default App;
