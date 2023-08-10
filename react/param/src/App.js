import './App.scss';
import {Link, BrowserRouter, Route, Routes} from 'react-router-dom';
import Snack from './page/Snack';
import data_s from './page/data_s.json';
import Tablet_PC from './page/Tablet_PC';
import data_t from './page/data_t.json';
import ParamItem_s from './page/ParamItem_s';
import ParamItem_t from './page/ParamItem_t';

function App() {
  return (
    <>
      <BrowserRouter>
      <article className='test'>
            <h2>주제 자유)</h2>
            <h3>1. data.json</h3>
            <h3>2. 리스트 아이템</h3>
            <h3>3. 상세보기 화면 (useParams활용)</h3>
      </article>
      <div className='wrap'>
        <header>
          <h3>블로그에서 많이 찾는<p>최근 인기 아이템</p></h3>
          <div className='wrapA'>
            <div className='a'><Link to="/">과자</Link></div>
            <div className='a'><Link to="/tabPC">태블릿PC액세서리</Link></div>  
          </div>        
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Snack data={data_s} />} />
            <Route path="/tabPc" element={<Tablet_PC data={data_t} />} />
            <Route path="/ParamItem_s/:code" element={<ParamItem_s data={data_s} />} />
            <Route path="/ParamItem_t/:code2" element={<ParamItem_t data={data_t} />} />
          </Routes>
        </main>
      </div>
      </BrowserRouter>
    </>
  );
}
export default App;
