import {DataContext} from '../MyContext';
import {useContext} from 'react';

function Write() {
    const {data, setData} = useContext(DataContext);
    let insert = function(e){
        e.preventDefault();
        let v =e.target;
        let d ={
            name:v.name.value, 
            email:v.email.value, 
            txt:v.txt.value,
            id:Date.now()
        }
        // console.log(d);
        // setData([d]);//[]=>배열로 넣기
        setData([...data, d]);//위엣거는 마지막 저장값만 나옴. 이렇게하면 값이 누적됨
    }

    return (
        <article>
            <h2>Write</h2>
            <form onSubmit={insert}>
                <input type="text" name="name" placeholder='이름'/>
                <input type="email" name="email"placeholder='이메일'/>
                <textarea name="txt"></textarea>
                <input type="submit" value="저장"/>
            </form>
        </article>
    )
}
export default Write
