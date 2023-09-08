// 타입스크립트는 rf 대신 tsrafce
import React, { useContext, useRef, useState } from 'react';
import { TestContext } from '../MyContext'

type Props = {}

interface ts_msg{
    // category: '구기 종목', msg: '탁구', id: '1694161077371'
    // 셋다 string이네? ↓
    [key:string]:FormDataEntryValue
}


const Write = (props: Props) => {
    const {data} = useContext(TestContext);
    const dataKey:string[] = Object.keys(data);
    const msgForm = useRef<HTMLFormElement|null>(null);
    //이제저장할것임
    const [community, setCommunity] = useState<ts_msg[]>([]);
    console.log(community);
    

    const insert =(e:React.FormEvent<HTMLFormElement>):void=>{
        e.preventDefault();
        if(msgForm.current){
            let formdata = new FormData(msgForm.current);
            let idx:number = Date.now();
            formdata.append('id',idx.toString());

            console.log( Object.fromEntries(formdata) );
            let storage:ts_msg =( Object.fromEntries(formdata) );
            setCommunity( [...community,storage] );
        }
    }

    return (
        <article>
            <h2>Write</h2>
            <div>
                <form onSubmit={insert} ref={msgForm}>
                    <select name='category'>
                        {
                            dataKey.map((obj:string,idx:number)=>(
                                <option key={idx}>{obj}</option>
                            ))
                        }
                    </select>
                    <textarea name='msg'></textarea>
                    <input type="submit" value="저장"/>
                </form>
            </div>
        </article>
    )
}

export default Write