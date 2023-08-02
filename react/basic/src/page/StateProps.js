import { useState } from 'react';

export default function StateProps({data, name, anything}) {
    //console.log(aaa);//data='1000'~ 값 넣은게 들어옴
    console.log(data, name, anything);//이렇게 따로 받을 수도 있음
    
    //let count = 0;//state에서 이 숫자를 +해볼것임
    let [count, setCount] = useState(0);
    function plus(){
        setCount(++count);
    }
    return (
        <>
            <h2>Props</h2>
            * 부모 컨포넌트에서 자식 컨포넌트로 값을 보내줄 때 사용<br/>
            * &#60; 자식 컨포넌트 속성='값'/&#62;<br/>
            * function 자식 ( <b>props</b> )&#123;<br/>
                &nbsp;&nbsp;&nbsp; 
                console.log( props ) //	<b><i>&#123; 속성:'값'&#125;</i></b><br/>
            &#125;
            <br/><br/>* F12 누르면 App.js의 main>Routes>Route 안에 쓴 값을 가져온 것을 볼 수 있음<br/>
            <hr/>

            <h2>State</h2>
            <button onClick={plus}> {count} </button><br/>
            * useState( )  <i> //상태[ 값, 값 수정 함수 ] </i><br/>
            * 값 수정 함수를 이용해서 값을 수정하면, 컨포넌트 자체내에 랜더링 발생<br/>
            * 랜더링 발생 시 바뀐값이 실제 dom에 적용됨<br/>
        </>
    )
}
