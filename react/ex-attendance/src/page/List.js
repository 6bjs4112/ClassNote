import {useContext} from 'react'
import { DataContext } from '../MyContext'

export default function List({}) {
    const {data,setData} = useContext(DataContext);

    return (
        <article>
            <h2>출석부</h2>
            <p>참여인원 {data.length}명</p>
            <ul className='peopleList'>
            {
                (data.length ==0)? 
                '내용을 입력해 주세요'
                :
                data.map((item)=>(
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <button onClick={()=>{deleteData(item.id)}}>삭제</button>
                    </li>
                ))
            }
            </ul>
        </article>
    )
}
