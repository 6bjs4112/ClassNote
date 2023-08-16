import {DataContext} from '../MyContext';
import {useContext, useRef} from 'react';

export default function Write({}) {
    const element = useRef(null);
    const {data, setData} = useContext(DataContext);
    
    //페이지 안보이다가 보이게하기
    let addPage = function(){
        element.current.classList.toggle('active')
    }
    // 내용 넣기
    let insert = function(e){
        e.preventDefault();
        let v = e.target;
        let d = {name:v.name.value, id:Date.now()}
        setData([...data, d]);
    }

    //삭제 버튼
    // const deleteData = function(code){
    //     let deleteData = data.filter(item => (item.id != code));
    //     setData(deleteData);
    //     alert('눌림?');
    // }

    return (
        <div className='newWrite'>
        <div className='addPeople' onClick={addPage}>
            <h2>+</h2>
        </div>
        <form className='inputForm' onSubmit={insert} ref={element}>
            <h1>참여자 등록</h1>
            <input type="text" name='name' placeholder='이름을 입력하세요'/>
            <button>저장</button>
        </form>
    </div>
    )
}
