import './App.scss'; //css에서 scss로 변경했음~ 파일 명도 바꿔줬음~
import Css from './page/Css';
import Image from './page/Image';
import Home from './page/Home';

function App() {//함수인데 첫 문자가 대문자면 컴포넌트로 간주
  return (
    <div className='wrap'>
      <header>
        <nav style={{border: '1px solid red'}}>
          <a href='#'> CSS 활용</a>
          <a href='#'> router(페이지 이동) </a>
          <a href='#'> img 활용 </a>
				</nav>  
      </header>

			<main>
        <Home />
        <Css />{/*상단에 자동으로 import가 됨. Css.js 안의 내용이 불러와 짐*/}
        <Image></Image>


      </main>
    </div>
  );
}

export default App;
