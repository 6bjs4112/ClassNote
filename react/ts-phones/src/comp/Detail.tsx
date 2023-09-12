import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import { ts_phone } from "../types";
import telbook from "../data.json"

type Props = {}

function Detail({}: Props) {
    const { id } = useParams();
    const [detail, setDetail] = useState<ts_phone | null>(null);
    useEffect(() => { 
        const detailData = telbook.find((item: ts_phone) => item.id === Number(id));
        setDetail(detailData || null);
    }, [id]);
    
    return (
        <section className="detail">
            {/* <div>디테일 테스트</div> */}
            <article className='detailBox'>
                {detail && 
                (
                    <li key={detail.id}>
                        <div>{detail.name.charAt(0)}</div>
                        <h1>{detail.name}</h1>
                        <p>{detail.tel}</p>
                    </li>
                )}
            </article>
        </section>
    )
}

export default Detail