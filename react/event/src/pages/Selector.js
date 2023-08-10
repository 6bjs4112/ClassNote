import React, {useEffect, useRef, useState} from 'react'
//다른 파일에 Framer적용해보기 ↓
import { motion } from "framer-motion";
import {txt,txt2} from './animation';

export default function Selector() {
  //1.하나의 선택자 잡기
  const element = useRef(null);
  let pop = ()=>{
    //popup에 클래스를 add하기
    console.log(element.current);//div가 잡힌것을 볼 수 있음
    element.current.classList.toggle('active');//클래스에 active 토글되는것 확인 가능
  }

  //2.다중선택자 잡기
  const elementAll = useRef([]);
  let data =[1,2,3,4,5];
  let pop2 = function(){
    console.log(elementAll.current);
  }

  useEffect(function(){
    selectorAll();
  },[])

  function selectorAll(){
    elementAll.current.forEach(ele=>{
      ele.style="border: 1px solid red";
    })
  }

  //3.ref 없이 랜더링 방식 이용해서 dom 바꾸기
  const [state, setState] = useState(false);
  let like = function(){
    //state값을 반대로 (true일경우 false로) 바꾸기
    setState(!state);
  }

  return (
    <>
    <motion.div 
      variants={txt2}
      initial="init"
      animate="play"
    >
    {/* 1.하나의 선택자 잡기 */}
      <article>
        <h2>Selector(선택자)</h2>
        <button onClick={pop}>열기</button>
        <div className='popup' ref={element}>
          팝업창....
        </div>
      </article>

    {/* 2.다중선택자 잡기 */}
      <article>
        <h2>selectorAll(다중 선택자)</h2>
        <button onClick={pop2}>콘솔로그 찍기</button>
        <ul>
          {//스크립트
            data.map((item,k)=>(
              <li key={k} ref={(el)=>elementAll.current[k]=el}>
                다중 선택자{item}
              </li>
            ))
          }
        </ul>
      </article>

    {/* 3.ref 없이 랜더링 방식 이용해서 dom 바꾸기 */}
      <article>
        <h2>state값을 변경하여 element 제어</h2>
        <button onClick={like}>좋아요</button>
        {/* <div className={state?'active':''}>  */}
        <div className={`like ${state?'active':''}`}> 
        {/* state가 참이면 active 거짓이면 빈칸  */}
          활성화 & 비활성화<br/>
          콘솔로그로 보면 버튼 누를때 마다 active가 toggle되는 것을 볼 수 있음 
        </div>
      </article>
      </motion.div>
    </>
  )
}
