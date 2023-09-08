import './App.scss';
import {Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import MyContext from './MyContext';
import Write from './component/Write';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Home</Link>
        <Link to="/write">Community</Link>
      </header>

      <main>
        <MyContext>
          <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/write'element={<Write/>}></Route>
          </Routes>
        </MyContext>
        {/* <div><img src='../ditto.jpg'/></div> */}
      </main>

    </BrowserRouter>
  );
}

export default App;
