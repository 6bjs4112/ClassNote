import { object } from 'prop-types';
import React, { useContext, useRef } from 'react'
import { MyContext } from '../Context';
import { useNavigate } from 'react-router-dom';

export default function Insert() {
    //form태그 잡기
    const elForm = useRef();
    const {fetchFn} = useContext(MyContext);
    
    //네비 함수=> 홈으로 보내기
    const navigate = useNavigate();
    //navigate('/'); 홈으로 보낼 부분에 넣으면 됨

    //<code>값 가져오기
    const insertFn= function(t,e){
        //t에는 p/m이 들어오고, e에는 이벤트 정보 들어옴
        e.preventDefault();
        console.log(t);

        let formData = new FormData(elForm.current);
        
        //날짜 추가해주기
        let today =  new Date();
        const date = today.toISOString().slice(0, 10);
            formData.append('date', date);
            
        let ObjForm = Object.fromEntries(formData);
        console.log(ObjForm);
        fetchFn('post',ObjForm);//post로 요청
        navigate('/'); //홈으로 보내기
    }

    return (
        <article>
            <h2>Insert</h2>
            <form ref={elForm}>
                <input type='text' name='price'placeholder='가격'/>
                <textarea name='msg'placeholder='메세지'></textarea>
                <button onClick={(e)=>{insertFn('p',e)}}>예금하기</button>
                <button onClick={(e)=>{insertFn('m',e)}}>출금하기</button>
            </form>
        </article>
    )
}
