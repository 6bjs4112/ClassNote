import React, { useContext, useEffect, useRef } from 'react'
import { MyContext } from '../Context'
import Item from './Item';


export default function List() {
  const {data, fetchFn} = useContext(MyContext);
  
  const codeRef = useRef(null);
  useEffect(() => {
    // 컴포넌트가 마운트된 후에 코드 엘리먼트에 접근 가능
    if (codeRef.current) {
      // codeRef.current를 사용하여 엘리먼트에 접근
    }
  }, []);

  return (
    <article>
        <h2>List</h2>
        <p className='total'>총 잔액-<code ref={codeRef}>3500</code></p>
        <ul>
          {
            //예금p 출금m 데이터 뿌리기
            data.map(obj=>(
              //Item.js로 옮겼음
              <Item key={obj.id} obj={obj}/>
            ))
          }
        </ul>
    </article>
  )
}
