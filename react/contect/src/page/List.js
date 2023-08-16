import {useContext} from 'react'
import { DataContext } from '../MyContext'

export default function List() {
    //부모가 가진 값 꺼내 써보기
    const value = useContext(DataContext);
    console.log(value);

    //부모가 가진 setData가져오기
    const {data,setData} = useContext(DataContext);
    console.log(data);

    //Write.js의 값 출력하기
    return (
        <article>
            <h2>List</h2>
            <ul>
                {
                    data.map((item)=>(
                        <li key={item.id}>
                            {item.name}({item.email})<br/>
                            {item.txt}({Date(item.id)})
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}
