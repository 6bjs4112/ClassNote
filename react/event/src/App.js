import './App.scss';
import {Link, BrowserRouter, Route, Routes} from 'react-router-dom';
import $ from 'jquery';

import Selector from './pages/Selector';
import Scroll from './pages/Scroll';
import JQuery from './pages/JQuery';
import Framer from './pages/Framer';
import Slide from './pages/Slide';
import RectVideo from './pages/ReactVideo';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/"> Selector(useRef) </Link>
        <Link to="/scroll"> Scroll Event </Link>
        <Link to="/jquery"> JQuery </Link>
        <Link to="/framer"> Framer Motion </Link>
        <Link to="/slide"> Slide Swiper </Link>
        <Link to="/video"> RectVideo </Link>
      </nav> 
      <main>
        <Routes>
          <Route path='/' element={<Selector/>} />
          <Route path='/scroll' element={<Scroll/>} />
          <Route path='/jquery' element={<JQuery/>} />
          <Route path='/framer' element={<Framer/>} />
          <Route path='/slide' element={<Slide/>} />
          <Route path='/video' element={<RectVideo/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
