import { useParams } from "react-router-dom"

export default function ParamItem_t({data}) {
    const {code2} = useParams();
    let detail = data.filter(obj => obj.id === code2);

    return (
        <>  
            <div className="eachItem">
                <div className="left"><img src={`.${detail[0].thumb}`}></img></div>
                <div className="right">
                    <h2>{detail[0].name}</h2>
                    <p>{detail[0].price}</p>
                    <button>구매하기</button>
                </div>
            </div>
        </>
    )
}