import { Link } from 'react-router-dom'
import telbook from '../data.json'
import { ts_phone } from '../types'

type Props = {

}
const List = (props: Props) => {
    console.log(telbook);

    return (
        <>
            <section className='list'>
                <p>저장된 연락처 <code>{telbook.length}</code>개</p>
                <ul className='telBox'>
                    {
                        telbook.map((obj:ts_phone)=>(
                            <li key={obj.id}>
                                <div>{obj.name.charAt(0)}</div>
                                <span>{obj.name}</span>
                                {/* <a href={obj.tel}><img src='./ditto.jpg'/></a> */}
                                <Link to={`/${obj.id}`}><a href={obj.tel}><img src='./ditto.jpg'/></a></Link>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </>
    )
}

export default List