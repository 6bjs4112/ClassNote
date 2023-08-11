import React from 'react'

export default function Item({item, todoStatus, deleteData, modifyData}) {
  
  return (
    <>
      <li className={item.state? 'active':''}> 
        {/*key={item.date} key삭제함. 왜? App의 map에서 쓰는거니까*/}
        <div>
          <input type='checkbox'data-code={item.date} onChange={todoStatus}/>
          <code>{item.todo}</code>
        </div>
        <div>
          <button 
            disabled={item.state ? true:false}//체크하고나면 수정이 안되게 disable처리
            onClick={()=>{modifyData(item.date)}}>
              수정
          </button>
          <button onClick={()=>{deleteData(item.date)}}>삭제</button>
        </div>
      </li>
    </>
  )
}
