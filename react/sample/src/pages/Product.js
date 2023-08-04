import Item from "./Item";

export default function Product({data}) {
    // console.log(data[0]);
    return (
        <>
            <h2>React State & Props</h2>
            <div className="fig_wrap">
                {
                    data.map((item, k)=>(
                        <Item key={item.id} item={item} />
                    ))
                }
            </div>
        </>
    )
}
