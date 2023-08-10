import Item from "./Item_s";

export default function Snack({data}) {
  return (
    <>
        <div className="fig_wrap">
            {
                data.map((item, k)=>(
                    <Item key={item.id} item={item}/>
                ))
            }
        </div>
    </>
  )
}

