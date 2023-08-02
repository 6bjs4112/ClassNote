import './App.scss'; //css에서 scss로 변경했음~ 파일 명도 바꿔줬음~
import Css from './page/Css';
import Image from './page/Image';
import Home from './page/Home';

import {Link, BrowserRouter, Route, Routes} from 'react-router-dom';
import Not from './page/Not';
import Router from './page/Router';
import StateProps from './page/StateProps';

function App() {//함수인데 첫 문자가 대문자면 컴포넌트로 간주
  return (
    <BrowserRouter>
      <div className='wrap'>
        <header>
          <nav style={{border: '1px solid red'}}>
            <Link to="/"> HOME</Link>
            <Link to="/css"> CSS 활용</Link>
            <Link to="/img"> Img 활용 </Link>
            <Link to="/router" state='a100'> Router(페이지 이동) </Link>
            <Link to="/rr"> not 테스트용 </Link>
            <Link to="/props"> State & Props </Link>
          </nav>  
        </header>

        <main>
          <Routes>
            {/* 어제 붙여넣었던 것들
            <Home />
            <Css />
            <Image></Image> */}

            {/* Link와 연결? */}
            <Route path='/' element={<Home />} />
            <Route path='/css' element={<Css />} />
            <Route path='/img' element={<Image></Image>} />
            <Route path='/router' element={<Router/>} />
            <Route path='/*' element={<Not/>} />
            <Route path='/props' element={<StateProps data='1000' name='props' anything='likethis'/>} />
          </Routes>

        </main>
        
      </div>
    </BrowserRouter>
  );
}

export default App;

