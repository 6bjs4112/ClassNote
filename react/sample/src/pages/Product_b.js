import Item_b from "./Item_b";

export default function Product_b({data}) {
    // console.log(data[0]);
    return (
        <>
            <h2>비동기</h2>
            <div className="fig_wrap">
                {
                    data.map((item, k)=>(
                        <Item_b key={item.id} item={item} />
                    ))
                }
            </div>
        </>
    )
}
