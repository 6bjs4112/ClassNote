import React, { useContext } from 'react'
import { MyContect } from '../Context';

export default function Write() {

    const {dispatch} = useContext(MyContect);

    const insert = (e)=>{
        e.preventDefault();

        let today =  new Date();

        let form = new FormData(e.target);
            form.append('id',Date.now());
            // form.append('date',new Date(today));//이렇게하면 한국표준시 전부 뜸
            form.append('date',`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`);

        let d = Object.fromEntries(form);
        console.log(d);

        dispatch( {type:'insert', data:d} );
    }

    return (
        <article>
            <h2>Contect</h2>
            <form onSubmit={insert} id='contect'>
                <input type='text'name='name' placeholder='이름'/>
                <input type='email'name='email' placeholder='이메일'/>
                <textarea name='content'></textarea>
                <input type='submit'value='저장하기'/>
            </form>
        </article>
    )
}
