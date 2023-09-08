import React, { useState } from 'react';
import './App.scss';
import data from './data.json';
import Item from './Item';
import { ty_Data } from './types'

const App:React.FC = ()=>{
  const [init, setInit] = useState<ty_Data>(data);
  // const init:ty_Data = data;
  
  return (
    <>
      <Item data={init}/>
    </>
  );
}
export default App;
