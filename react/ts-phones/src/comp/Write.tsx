import telbook from "../data.json"
import React, { useRef, useState } from 'react';
import { ts_phone } from '../types'
import axios from 'axios';

type Props = {}

const Write = (props: Props) => {
    // const submitForm = useRef<React.BaseSyntheticEvent |null>(null);
    const [telData, setTelData] = useState<ts_phone[]>([]);

    const insert = function(e:React.BaseSyntheticEvent):void{
        e.preventDefault();

        const newId = parseInt(Date.now().toString().slice(-6), 10);
        const nameInput = e.target.name.value;
        const telInput = e.target.tel.value;

        const newData:ts_phone = {
            id: newId,
            name: nameInput,
            tel: telInput,
        };
        const newTelbook:ts_phone[]= [...telbook, newData];
        setTelData(newTelbook);

        console.log(newData);
        console.log(newTelbook);

        axios.post('http://localhost:3030/insert',newTelbook)
        alert('저장 완료');
        window.location.href = './list';
    }

    return (
        <>
            <section className='write'>
                <p>새로운 친구를 등록해 주세요</p>
                <form onSubmit={insert}  className='inputSlot'>
                    <input type='text'name="name" placeholder='이름' className='name'/>
                    <input type='text' name="tel" placeholder='010-0000-0000' className='tel' />
                    <button type='submit'>저장</button>
                </form>
            </section>
        </>
    )
}

export default Write