import './App.scss';
import {Link, BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Product_b from './pages/Product_b';
import data from './pages/data.json';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  //비동기
  let [data_b, setData] = useState();//자기 값이 변하면 랜더링이 발생 하는 useState

  useEffect(function(){//렌더링이 수백번일어나도 이 안에 값은 한번만 실행됨
    axios('./data_b.json')
    // axios.get('./data_b.json')
    // .then(res=>res.json())
    .then(d=>{
      setData(d.data);
    })
  },[])
  console.log(data_b);
  
  if(!data_b) return <>로딩중...</>; 
  // data_b가 값을 갖고있지 않을때만 아래 것을 실행. 한번만 실행시키게

  return (
    <BrowserRouter >
      <div className='whole_wrap'>
        <header>
          <nav>
            <Link to="/" className='home' style={{color: 'red'}}>HOME</Link>
            <p>|</p>
            <Link to="/product" className='prod'>PRODUCT</Link>
            <p>|</p>
            <Link to="/product_b" className='prod'>PRODUCT_b</Link>
            <p>|</p>
            <Link to="/paramItem" className='prod'>Param item</Link>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product data={data} />} />
            <Route path="/product_b" element={<Product_b data={data_b} />} />
            <Route path="/paramItem" element={<ParamItem />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
