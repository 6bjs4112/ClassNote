import {useContext} from 'react';
import { DataContext } from '../MyContext'

export default function List({}) {
    const {data,setData} = useContext(DataContext);

    //삭제 버튼
    const deleteData = function(code){
        let deleteData = data.filter(item => (item.id != code));
        setData(deleteData);
    }
    //출석일수
    const dateCount = function(id){
        const updatedData = data.map(item => {
            if (item.id === id) {
                return { ...item, num: item.num + 1 };
            }
            return item;
        });
        setData(updatedData);
    }
    //지각일수
    const lateCount = function(id){
        const updatedLate = data.map(item => {
            if (item.id === id) {
                return { ...item, numL: item.numL + 1 };
            }
            return item;
        });
        setData(updatedLate);
    }

    return (
        <article>
            <h2>출석부</h2>
            <p>참여인원 {data.length}명</p>
            <ul className='peopleList'>
            {   //삼항연산자
                (data.length ==0)? 
                //입력된 것이 없으면 아래 내용을 띄움
                '내용을 입력해 주세요'
                :
                //입력이 되면 아래 형식에 맞춰 리스트 출력
                data.map((item)=>(
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <div>
                            <button onClick={()=>{dateCount(item.id)}}>출석</button>
                            <button onClick={()=>{lateCount(item.id)}}>지각</button>
                            <button onClick={()=>{deleteData(item.id)}}>삭제</button>
                        </div>
                    </li>
                ))
            }
            </ul>
            <h2>출석 현황</h2>
            <ul>
                {
                    data.map((item)=>(
                        <li>
                            <b className={item.numL>5 ? 'active' : ''}>{item.name}</b>
                            <span> 학번: {String(item.id).slice(-6)}</span>
                            <span> 출석: {item.num}</span>
                            <span> 지각: <span className={item.numL>5 ? 'active' : ''}>{item.numL}</span></span>
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}
