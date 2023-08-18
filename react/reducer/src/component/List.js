import React, { useContext } from 'react'
import { MyContect } from '../Context';

export default function List() {

    const {data, dispatch} = useContext(MyContect);

    return (
        <article>
            <h2>관리자가 확인하는 리스트</h2>
            <ul>
                {
                    data.map(obj=>(
                        <li key={obj.id}>
                            <p>
                                [{obj.name}] {obj.email} 
                                {obj.content}
                                <button onClick={function(){
                                        dispatch({type:'delete', id:obj.id})
                                    }
                                }>삭제</button>
                            </p>
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}
