import React from 'react'

export default function Item({item, todoStatus}) {
  
  return (
    <>
      <li className={item.state? 'active':''}> 
        {/*key={item.date} key삭제함. 왜? App의 map에서 쓰는거니까*/}
        <div>
          <input type='checkbox'data-code={item.date} onChange={todoStatus}/>
          <code>{item.todo}</code>
        </div>
        <div>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </li>
    </>
  )
}
