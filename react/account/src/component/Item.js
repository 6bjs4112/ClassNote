import React, { useContext } from 'react'
import { MyContext } from '../Context'
import { useNavigate } from 'react-router-dom';

export default function Item({obj}) {
  const {fetchFn} = useContext(MyContext);
  const navigate = useNavigate();
  return (
    <>
      <li>
        <code>{obj.date}</code>
        <code>{obj.msg}</code>
        <code>{obj.price}</code>
        <span>
          <button onClick={()=>{ navigate('/modify',{state:{obj}}) }}>수정</button>
          <button onClick={()=>{fetchFn('del',obj.id)}}>삭제</button>
        </span>
      </li>
    </>
  )
}
