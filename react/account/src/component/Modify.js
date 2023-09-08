import React, { useContext, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { MyContext } from '../Context';

export default function Modify() {
    const elForm = useRef();
    const location =  useLocation();
    const {price,msg,date,id} = location.state.obj;

    //insert에서 복붙해온것
    const navigate = useNavigate();
    const {fetchFn} = useContext(MyContext);
    const insertFn= function(t,e){
        e.preventDefault();

        let formData = new FormData(elForm.current);
        
        let today =  new Date();
        const date = today.toISOString().slice(0, 10);
            formData.append('date', date);//수정하는 날짜로 갱신됨
        //갱신 안하고 싶으면 위에 location쪽 date값 이용하기
            
        formData.append('id', id);//수정할 놈을 잡기 위해 id추가

        let ObjForm = Object.fromEntries(formData);
        console.log(ObjForm);
        fetchFn('put',ObjForm);//put으로 요청
        navigate('/'); //홈으로 보내기
    //여기까지 insert 복붙
    
    //예금출금하기
        // if (t ==='p') {
        // //예금동작
        // console.log(t);
        // console.log(codeRef);
        // }else if (t ==='m'){
        //     //출금동작
        // console.log(t);
        // }
    }




    return (
        <article>
            <h2>Modify</h2>
            <form ref={elForm}>
                <input type='text' name='price'placeholder='가격'defaultValue={price}/>
                <textarea name='msg'placeholder='메세지'defaultValue={msg}></textarea>
                <button onClick={(e)=>{insertFn('p',e)}}>예금하기</button>
                <button onClick={(e)=>{insertFn('m',e)}}>출금하기</button>
            </form>
        </article>
    )
}
